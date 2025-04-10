import type { NextApiRequest, NextApiResponse } from 'next';

// Usuário de teste mockado (mesmo do login)
const TEST_USER = {
  id: '1',
  name: 'Admin Teste',
  email: 'admin@nandana.com.br',
  role: 'admin'
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  const token = authHeader.split(' ')[1];

  // Em produção, verificar o token JWT
  if (token.startsWith('test_token_')) {
    return res.status(200).json({ user: TEST_USER });
  }

  return res.status(401).json({ message: 'Token inválido' });
} 