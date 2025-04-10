import React from 'react';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/about-image.jpg"
              alt="Profissionais de saúde trabalhando"
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <h4 className="text-green-500 font-medium mb-2">Conheça a Nandana</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Sobre Nós
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                O Nandana é um espaço virtual que acolhe terapeutas e facilitadores que desejam oferecer seu trabalho 
                de cura e desenvolvimento humano de forma profissional e acessível. Por meio da nossa plataforma, é 
                possível atender individualmente ou facilitar grupos online, com toda a estrutura digital necessária para 
                uma atuação segura, organizada e acolhedora.
              </p>
              <p>
                Aqui você também encontra cursos e terapias online, disponíveis para acesso de qualquer lugar do 
                mundo, a qualquer momento. Levamos autoconhecimento, cuidado e aprendizado até você — onde quer 
                que esteja.
              </p>
            </div>

            <div className="mt-8">
              <a 
                href="/sobre-nos" 
                className="px-8 py-3 bg-green-500 text-white inline-block rounded-md hover:bg-green-600 transition-colors"
              >
                Conheça a Nandana
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 