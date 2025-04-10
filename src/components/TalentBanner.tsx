import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

interface TalentBannerProps {
  onCtaClick?: () => void;
}

const TalentBanner: React.FC<TalentBannerProps> = ({ onCtaClick }) => {
  return (
    <section className="relative py-24 overflow-hidden bg-[#234842]">
      {/* Imagem de fundo com overlay - pode ser descomentada quando tiver a imagem real */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src="/images/talent-banner-bg.jpg"
          alt="Profissionais de saúde conversando"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
      </div> */}
      
      {/* Conteúdo do banner */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-3xl mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              Conecte seu talento a quem precisa: venha fazer parte da nossa plataforma de cuidado e bem-estar
            </h2>
          </div>
          
          <div className="flex flex-col items-center md:items-end md:ml-8">
            <p className="text-white text-xl mb-6 text-center md:text-right font-light">
              Comece agora mesmo<br />
              a crescer com a gente
            </p>
            <button
              onClick={onCtaClick}
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
            >
              Fazer Meu Cadastro
              <FiArrowRight className="ml-2 -mr-1 h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentBanner; 