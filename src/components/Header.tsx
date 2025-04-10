import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useScrollTo from '@/hooks/useScrollTo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const scrollTo = useScrollTo();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const isHomePage = router.pathname === '/';
    
    if (isHomePage) {
      const sectionId = path.replace('/', '');
      scrollTo(sectionId || 'hero');
    } else {
      router.push('/').then(() => {
        setTimeout(() => {
          const sectionId = path.replace('/', '');
          scrollTo(sectionId || 'hero');
        }, 100);
      });
    }
    
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center"
          aria-label="Nandana Terapias - Página Inicial"
          onClick={(e) => handleNavigation(e, '/')}
        >
          <div className="relative w-48 h-14">
            <Image 
              src="/images/logo.png" 
              alt="Nandana Terapias Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Menu para desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors" onClick={(e) => handleNavigation(e, '/')}>
            Home
          </Link>
          <Link href="/sobre-nos" className="text-gray-700 hover:text-green-600 font-medium transition-colors" onClick={(e) => handleNavigation(e, 'sobre-nos')}>
            Sobre Nós
          </Link>
          <Link href="/terapeutas" className="text-gray-700 hover:text-green-600 font-medium transition-colors" onClick={(e) => handleNavigation(e, 'terapeutas')}>
            Terapeutas e Profissionais
          </Link>
          <Link href="/planos" className="text-gray-700 hover:text-green-600 font-medium transition-colors" onClick={(e) => handleNavigation(e, 'planos')}>
            Nossos Planos
          </Link>
          <Link href="/perguntas-frequentes" className="text-gray-700 hover:text-green-600 font-medium transition-colors" onClick={(e) => handleNavigation(e, 'perguntas-frequentes')}>
            Perguntas Frequentes
          </Link>
          <Link href="/contato" className="text-gray-700 hover:text-green-600 font-medium transition-colors" onClick={(e) => handleNavigation(e, 'contato')}>
            Contato
          </Link>
          <Link 
            href="/login" 
            className="px-6 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors"
          >
            Login/Cadastro
          </Link>
        </nav>

        {/* Botão de menu mobile */}
        <button 
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors" onClick={(e) => handleNavigation(e, '/')}>
              Home
            </Link>
            <Link href="/sobre-nos" className="text-gray-700 hover:text-green-600 font-medium transition-colors" onClick={(e) => handleNavigation(e, 'sobre-nos')}>
              Sobre Nós
            </Link>
            <Link href="/terapeutas" className="text-gray-700 hover:text-green-600 font-medium transition-colors" onClick={(e) => handleNavigation(e, 'terapeutas')}>
              Terapeutas e Profissionais
            </Link>
            <Link href="/planos" className="text-gray-700 hover:text-green-600 font-medium transition-colors" onClick={(e) => handleNavigation(e, 'planos')}>
              Nossos Planos
            </Link>
            <Link href="/perguntas-frequentes" className="text-gray-700 hover:text-green-600 font-medium transition-colors" onClick={(e) => handleNavigation(e, 'perguntas-frequentes')}>
              Perguntas Frequentes
            </Link>
            <Link href="/contato" className="text-gray-700 hover:text-green-600 font-medium transition-colors" onClick={(e) => handleNavigation(e, 'contato')}>
              Contato
            </Link>
            <Link 
              href="/login" 
              className="px-6 py-3 bg-green-500 text-white font-medium text-center rounded-md hover:bg-green-600 transition-colors"
            >
              Login/Cadastro
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 