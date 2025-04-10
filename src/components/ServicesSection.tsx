import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  linkUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageSrc, linkUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group">
      <div className="relative h-48 w-full">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          href={linkUrl}
          className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors font-medium"
        >
          Saiba mais
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Agenda Online",
      description: "Sistema completo para gerenciamento de consultas e compromissos, com confirmações automáticas.",
      imageSrc: "/images/service-agenda.jpg",
      linkUrl: "/servicos/agenda-online"
    },
    {
      title: "Prontuário Eletrônico",
      description: "Registre históricos de atendimento, evolução e documentos de pacientes com segurança.",
      imageSrc: "/images/service-prontuario.jpg",
      linkUrl: "/servicos/prontuario-eletronico"
    },
    {
      title: "Financeiro",
      description: "Controle de pagamentos, emissão de recibos e relatórios financeiros simplificados.",
      imageSrc: "/images/service-financeiro.jpg",
      linkUrl: "/servicos/financeiro"
    },
    {
      title: "Consultório Virtual",
      description: "Atendimentos online com videoconferência integrada e segurança para seus pacientes.",
      imageSrc: "/images/service-consultorio.jpg",
      linkUrl: "/servicos/consultorio-virtual"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas para terapeutas e profissionais de saúde organizarem seus atendimentos e potencializarem seus resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              linkUrl={service.linkUrl}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/servicos"
            className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md transition-colors font-medium"
          >
            Ver todos os serviços
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 