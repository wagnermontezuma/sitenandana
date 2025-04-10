import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('nandana_token');
  const isAuthPage = request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/register';
  const isAdminPage = request.nextUrl.pathname.startsWith('/admin');
  
  // Redireciona para login se não estiver autenticado
  if (!token && !isAuthPage) {
    const url = new URL('/login', request.url);
    url.searchParams.set('redirect', request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  // Redireciona para dashboard se já estiver autenticado tentando acessar páginas de auth
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  // Verifica permissões de admin (implementar lógica específica depois)
  if (isAdminPage) {
    // TODO: Verificar se o usuário tem role de admin
    // Por enquanto só verifica se está autenticado
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/dashboard/:path*',
    '/login',
    '/register',
  ],
}; 