import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import useScrollTo from '@/hooks/useScrollTo';

const Footer = () => {
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
  };

  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* O Nandana */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="mb-6">
              <Link href="/" onClick={(e) => handleNavigation(e, '/')}>
                <Image 
                  src="/images/logo.png" 
                  alt="Nandana Logo" 
                  width={200} 
                  height={65} 
                  className="mb-4"
                />
              </Link>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              O Nandana é um espaço virtual que acolhe terapeutas e facilitadores 
              que desejam oferecer seu trabalho de cura e desenvolvimento humano 
              de forma profissional e acessível.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="col-span-1">
            <h3 className="text-lg mb-4">Home</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre-nos" className="text-gray-600 hover:text-green-600 transition-colors" onClick={(e) => handleNavigation(e, 'sobre-nos')}>
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/terapeutas" className="text-gray-600 hover:text-green-600 transition-colors" onClick={(e) => handleNavigation(e, 'terapeutas')}>
                  Terapeutas e Profissionais
                </Link>
              </li>
              <li>
                <Link href="/planos" className="text-gray-600 hover:text-green-600 transition-colors" onClick={(e) => handleNavigation(e, 'planos')}>
                  Nossos Planos
                </Link>
              </li>
              <li>
                <Link href="/perguntas-frequentes" className="text-gray-600 hover:text-green-600 transition-colors" onClick={(e) => handleNavigation(e, 'perguntas-frequentes')}>
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-600 hover:text-green-600 transition-colors" onClick={(e) => handleNavigation(e, 'contato')}>
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Onde estamos */}
          <div className="col-span-1">
            <h3 className="text-lg mb-4">Onde estamos</h3>
            <p className="text-gray-600">
              Av. Siqueira Campos 618 altos –<br />
              Boqueirão, Santos– SP, 11045-200
            </p>
          </div>

          {/* Atendimento */}
          <div className="col-span-1">
            <h3 className="text-lg mb-4">Atendimento</h3>
            <p className="text-gray-600 mb-2">(13) 99766-8989</p>
            <p className="text-gray-600">nandanaterapias@gmail.com</p>
          </div>

          {/* A Plataforma */}
          <div className="col-span-1">
            <h3 className="text-lg mb-4">A Plataforma</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cadastro" className="text-gray-600 hover:text-green-600 transition-colors">
                  Criar Cadastro
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-gray-600 hover:text-green-600 transition-colors">
                  Acessar Conta
                </Link>
              </li>
              <li>
                <Link href="/psicologos" className="text-gray-600 hover:text-green-600 transition-colors">
                  Encontre um Psicólogo
                </Link>
              </li>
              <li>
                <Link href="/agendar" className="text-gray-600 hover:text-green-600 transition-colors">
                  Agende uma Consulta
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha separadora */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Redes sociais e copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            Todos os direitos reservados. Nandana Terapias {new Date().getFullYear()}
          </p>
          
          <div className="flex items-center">
            <h3 className="text-lg mr-4">Siga nos</h3>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook" 
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-right mt-4">
          <p className="text-sm text-gray-500">
            Desenvolvido por <span className="font-semibold">Bredi</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 