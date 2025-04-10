import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';

// Usuário de teste mockado
const TEST_USER = {
  id: '1',
  name: 'Admin Teste',
  email: 'admin@nandana.com.br',
  role: 'admin',
  password: 'nandana@2024' // Em produção, NUNCA armazenar senha em texto puro
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { email, password } = req.body;

  // Validação básica
  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios' });
  }

  // Verificação do usuário de teste
  if (email === TEST_USER.email && password === TEST_USER.password) {
    // Em produção, usar JWT ou outro método seguro
    const token = 'test_token_' + Date.now();
    
    // Remove a senha antes de enviar
    const { password: _, ...userWithoutPassword } = TEST_USER;

    // Define o cookie
    res.setHeader('Set-Cookie', serialize('nandana_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 7 dias
      path: '/',
    }));
    
    return res.status(200).json({
      token,
      user: userWithoutPassword
    });
  }

  return res.status(401).json({ message: 'Credenciais inválidas' });
} 