import React from 'react';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

interface AboutSectionProps {
  onCtaClick?: () => void;
}

export function AboutSection({ onCtaClick }: AboutSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Sobre o <span className="text-primary-600">Nandana</span>
            </h2>
            <p className="text-lg text-gray-600">
              O Nandana é uma plataforma que nasceu com o propósito de facilitar o 
              encontro entre pessoas que buscam desenvolvimento pessoal e profissionais 
              qualificados da área de saúde mental.
            </p>
            <p className="text-lg text-gray-600">
              Nossa missão é democratizar o acesso à terapia e proporcionar uma 
              experiência fluida tanto para pacientes quanto para profissionais.
            </p>
            <div className="pt-4">
              <button
                onClick={onCtaClick}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
              >
                Conheça mais sobre nós
                <FiArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src="/images/about-image.jpg"
              alt="Equipe Nandana"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection; 