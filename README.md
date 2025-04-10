# Nandana Terapias

Plataforma de agendamento e gestão de consultas terapêuticas.

## 🚀 Tecnologias

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Prismic CMS](https://prismic.io/)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)
- [Socket.IO](https://socket.io/)

## 📋 Pré-requisitos

- Node.js 18+
- npm ou yarn
- Git

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/nandana-terapias.git
cd nandana-terapias
```

2. Instale as dependências:
```bash
npm install
# ou
yarn
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```
Edite o arquivo `.env.local` com suas configurações.

4. Execute o projeto em desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

## 🏗️ Estrutura do Projeto

```
src/
├── components/     # Componentes React reutilizáveis
├── contexts/       # Contextos React (auth, notificações)
├── hooks/          # Hooks personalizados
├── lib/           # Configurações e utilitários
├── pages/         # Páginas da aplicação
├── public/        # Arquivos estáticos
├── styles/        # Estilos globais
└── types/         # Definições de tipos TypeScript
```

## 🧪 Testes

Execute os testes:
```bash
npm run test
# ou
yarn test
```

Para cobertura de testes:
```bash
npm run test:coverage
# ou
yarn test:coverage
```

## 📦 Build e Deploy

1. Build do projeto:
```bash
npm run build
# ou
yarn build
```

2. Executar em produção:
```bash
npm start
# ou
yarn start
```

## 🌐 Deploy na Vercel

O projeto está configurado para deploy automático na Vercel. Cada push na branch `main` dispara um novo deploy.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fseu-usuario%2Fnandana-terapias)

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## ✨ Contribuição

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request 