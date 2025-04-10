import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-white via-green-50 to-green-500">
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Lado esquerdo: imagem */}
          <div className="relative h-[500px] order-2 lg:order-1 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black/20 z-10"></div>
            <div className="relative w-full h-full">
              <Image
                src="https://via.placeholder.com/800x600/00bb77/ffffff"
                alt="Profissional utilizando a plataforma Nandana"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Lado direito: texto */}
          <div className="text-right order-1 lg:order-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-gray-800">Sua </span>
              <span className="text-green-500">Agenda</span>
              <br />
              <span className="text-green-500">Organizada,</span>
              <br />
              <span className="text-gray-800">Seu </span>
              <span className="text-green-500">Tempo</span>
              <br />
              <span className="text-green-500">Valorizado</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Com nossa plataforma,<br />
              você controla seus horários,<br />
              recebe agendamentos<br />
              automáticos e foca no que<br />
              realmente importa: cuidar<br />
              de pessoas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <a 
                href="/cadastro" 
                className="px-8 py-3 bg-green-500 text-white text-center rounded-md hover:bg-green-600 transition-colors"
              >
                Experimente já
              </a>
            </div>
          </div>
        </div>

        {/* Indicadores de slide */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-white"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 