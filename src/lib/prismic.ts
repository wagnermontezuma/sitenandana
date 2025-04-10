import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';

/**
 * O endpoint do repositório Prismic para seu projeto
 */
export const repositoryName = process.env.PRISMIC_REPOSITORY_NAME || 'nandana-terapias';

/**
 * Cria um cliente Prismic para o projeto
 */
export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(repositoryName, {
    ...config,
  });

  return client;
}; 