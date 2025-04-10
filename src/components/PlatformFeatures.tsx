import React from 'react';
import {
  BsGraphUp,
  BsCalendarCheck,
  BsDisplay,
  BsHeadset,
  BsPersonCheck,
  BsBarChartLine
} from 'react-icons/bs';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-green-500 rounded-xl p-4 mb-5 w-[80px] h-[80px] flex items-center justify-center text-white">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm max-w-[230px] mx-auto leading-relaxed">{description}</p>
    </div>
  );
};

const PlatformFeatures: React.FC = () => {
  const features = [
    {
      icon: <BsGraphUp size={38} />,
      title: "Divulgação Ativa dos Serviços",
      description: "Aumente sua visibilidade profissional e conquiste novos pacientes"
    },
    {
      icon: <BsCalendarCheck size={38} />,
      title: "Agenda Integrada e Automatizada",
      description: "Organize seus compromissos e evite conflitos de horários"
    },
    {
      icon: <BsDisplay size={38} />,
      title: "Atendimento Online e Presencial",
      description: "Flexibilidade para atender seus pacientes da melhor forma"
    },
    {
      icon: <BsHeadset size={38} />,
      title: "Zero Burocracia e Suporte Dedicado",
      description: "Foque na sua prática enquanto cuidamos dos detalhes"
    },
    {
      icon: <BsPersonCheck size={38} />,
      title: "Ambiente Profissional e Colaborativo",
      description: "Conecte-se com outros profissionais e amplie sua rede"
    },
    {
      icon: <BsBarChartLine size={38} />,
      title: "Acompanhamento de Desempenho e Evolução",
      description: "Monitore seu crescimento e aperfeiçoe sua prática"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-xl shadow-sm p-8 py-14">
          <div className="max-w-3xl mx-auto mb-16 text-left md:text-center">
            <p className="text-gray-600 mb-3">Veja seu crescimento profissional decolar</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Por que usar a plataforma da Nandana para seus Atendimentos?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Ao fazer parte da nossa plataforma, o profissional conta com mais visibilidade, 
              praticidade na gestão dos atendimentos e uma rede colaborativa de apoio. 
              Com recursos para agendamento, atendimento online ou presencial e divulgação do perfil, 
              oferecemos um espaço completo para facilitar seu trabalho e ampliar seu alcance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Feature
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures; 