import React from 'react';
import Image from 'next/image';

interface ConsultReasonProps {
  title: string;
  description: string;
  image: string;
}

const ConsultReason: React.FC<ConsultReasonProps> = ({ title, description, image }) => {
  return (
    <div className="flex flex-col">
      <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
        <Image 
          src={image} 
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhyConsult: React.FC = () => {
  const reasons = [
    {
      title: "Profissionais Confiáveis e Verificados",
      description: "Tenha a segurança de escolher entre especialistas avaliados e comprometidos com um atendimento ético e acolhedor.",
      image: "/images/professional-1.jpg"
    },
    {
      title: "Diversas Especialidades em um só Lugar",
      description: "Encontre psicólogos e terapeutas de diferentes áreas e abordagens, tudo em um único espaço, facilitando sua busca pelo cuidado ideal.",
      image: "/images/terapeuta.jpg"
    },
    {
      title: "Agendamento Fácil e Rápido",
      description: "Marque sessões com poucos cliques, de onde estiver. Praticidade para encaixar o cuidado com você na sua rotina.",
      image: "/images/service-agenda.jpg"
    },
    {
      title: "Atendimento Único e Humanizado",
      description: "Escolha o profissional que mais combina com você e receba um acompanhamento respeitoso, empático e centrado nas suas necessidades.",
      image: "/images/professional-3.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row mb-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
            <p className="text-gray-600 mb-2">Cuide bem da sua saúde</p>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Por que se consultar com os profissionais da Nandana?
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-gray-700">
              Ao se consultar pela nossa plataforma, você tem acesso a 
              profissionais confiáveis, diversas especialidades terapêuticas, 
              agendamento prático e um atendimento acolhedor e personalizado.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <ConsultReason
              key={index}
              title={reason.title}
              description={reason.description}
              image={reason.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyConsult; 