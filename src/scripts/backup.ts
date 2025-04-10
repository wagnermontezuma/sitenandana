import { exec } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';

export type BackupConfig = {
  dbName: string;
  dbUser: string;
  backupDir: string;
  retentionDays: number;
  incrementalBackupHours: number;
};

/**
 * Classe responsável por gerenciar backups do banco de dados
 * @class DatabaseBackup
 */
class DatabaseBackup {
  private config: BackupConfig;
  private today: Date;

  /**
   * @constructor
   * @param {BackupConfig} config - Configurações do backup
   */
  constructor(config: BackupConfig) {
    this.config = config;
    this.today = new Date();
  }

  /**
   * Gera o nome do arquivo de backup
   * @private
   * @returns {string} Nome do arquivo de backup
   */
  private getBackupFileName(): string {
    const timestamp = this.today.toISOString().replace(/[:.]/g, '-');
    return `backup-${this.config.dbName}-${timestamp}.sql.gz`;
  }

  /**
   * Executa o backup completo do banco de dados
   * @public
   * @returns {Promise<void>}
   */
  public async performFullBackup(): Promise<void> {
    const backupPath = path.join(this.config.backupDir, this.getBackupFileName());

    try {
      // Cria diretório de backup se não existir
      await fs.mkdir(this.config.backupDir, { recursive: true });

      // Executa pg_dump e comprime o resultado
      const dumpProcess = exec(
        `PGPASSWORD=$POSTGRES_PASSWORD pg_dump -U ${this.config.dbUser} ${this.config.dbName}`
      );

      const writeStream = (await fs.open(backupPath, 'w')).createWriteStream();
      const gzip = createGzip();

      await pipeline(
        dumpProcess.stdout!,
        gzip,
        writeStream
      );

      console.log(`Backup completo criado: ${backupPath}`);
    } catch (error) {
      console.error('Erro ao criar backup:', error);
      throw error;
    }
  }

  /**
   * Executa backup incremental (apenas mudanças desde o último backup)
   * @public
   * @returns {Promise<void>}
   */
  public async performIncrementalBackup(): Promise<void> {
    const lastBackupDate = await this.getLastBackupDate();
    if (!lastBackupDate) {
      return this.performFullBackup();
    }

    const backupPath = path.join(
      this.config.backupDir,
      `incremental-${this.getBackupFileName()}`
    );

    try {
      const dumpProcess = exec(
        `PGPASSWORD=$POSTGRES_PASSWORD pg_dump -U ${this.config.dbUser} ` +
        `--since="${lastBackupDate.toISOString()}" ${this.config.dbName}`
      );

      const writeStream = (await fs.open(backupPath, 'w')).createWriteStream();
      const gzip = createGzip();

      await pipeline(
        dumpProcess.stdout!,
        gzip,
        writeStream
      );

      console.log(`Backup incremental criado: ${backupPath}`);
    } catch (error) {
      console.error('Erro ao criar backup incremental:', error);
      throw error;
    }
  }

  /**
   * Obtém a data do último backup
   * @private
   * @returns {Promise<Date | null>}
   */
  private async getLastBackupDate(): Promise<Date | null> {
    try {
      const files = await fs.readdir(this.config.backupDir);
      const backupFiles = files.filter(f => f.startsWith('backup-'));
      
      if (backupFiles.length === 0) return null;

      const lastFile = backupFiles.sort().pop()!;
      const stats = await fs.stat(path.join(this.config.backupDir, lastFile));
      return stats.mtime;
    } catch {
      return null;
    }
  }

  /**
   * Remove backups antigos baseado na política de retenção
   * @public
   * @returns {Promise<void>}
   */
  public async cleanOldBackups(): Promise<void> {
    const retentionDate = new Date();
    retentionDate.setDate(retentionDate.getDate() - this.config.retentionDays);

    try {
      const files = await fs.readdir(this.config.backupDir);
      
      for (const file of files) {
        const filePath = path.join(this.config.backupDir, file);
        const stats = await fs.stat(filePath);

        if (stats.mtime < retentionDate) {
          await fs.unlink(filePath);
          console.log(`Backup antigo removido: ${file}`);
        }
      }
    } catch (error) {
      console.error('Erro ao limpar backups antigos:', error);
      throw error;
    }
  }
}

export { DatabaseBackup }; 