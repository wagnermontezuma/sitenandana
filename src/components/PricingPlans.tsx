import React from 'react';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';

interface PlanFeature {
  text: string;
}

interface PricingPlanProps {
  name: string;
  price: string;
  isPopular?: boolean;
  features: PlanFeature[];
}

const PricingPlan: React.FC<PricingPlanProps> = ({ name, price, isPopular = false, features }) => {
  return (
    <div className="bg-white rounded-lg shadow-md px-6 py-8 relative flex flex-col">
      {isPopular && (
        <div className="absolute -top-3 left-0 w-full flex justify-center">
          <span className="bg-orange-500 text-white px-6 py-1 rounded-full text-sm font-medium">
            Popular
          </span>
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-gray-800 mb-6 mt-4 text-center">{name}</h3>
      
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="text-center mb-6">
          <p className="text-green-500 text-6xl font-bold mb-0 leading-none">R$</p>
          <p className="text-green-500 text-8xl font-bold leading-none mt-2">{price}</p>
        </div>
        
        <div className="relative w-full">
          <select className="w-full p-3 pr-10 border border-gray-300 rounded-md appearance-none bg-white text-gray-700 cursor-pointer">
            <option>Mensal</option>
            <option>Anual</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-green-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="flex-grow space-y-5 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0 text-green-500 mt-1">
              <FaCheck />
            </div>
            <p className="ml-3 text-gray-600">{feature.text}</p>
          </div>
        ))}
      </div>
      
      <Link
        href="/cadastro"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-md text-center transition-colors"
      >
        Assinar
      </Link>
    </div>
  );
};

const PricingPlans: React.FC = () => {
  const plans = [
    {
      name: 'Plano Essential',
      price: '60,00',
      isPopular: true,
      features: [
        { text: 'Maior Visibilidade do seu trabalho' },
        { text: 'Gestão Facilitada das consultas e pacientes' },
        { text: 'Ambiente Colaborativo entre profissionais' },
      ],
    },
    {
      name: 'Plano Premium',
      price: '120,00',
      features: [
        { text: 'Maior Visibilidade do seu trabalho' },
        { text: 'Gestão Facilitada das consultas e pacientes' },
        { text: 'Ambiente Colaborativo entre profissionais' },
      ],
    },
    {
      name: 'Plano Premium +',
      price: '300,00',
      features: [
        { text: 'Maior Visibilidade do seu trabalho' },
        { text: 'Gestão Facilitada das consultas e pacientes' },
        { text: 'Ambiente Colaborativo entre profissionais' },
      ],
    },
  ];

  return (
    <section className="py-20 bg-[#19ac76]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Nossos Planos</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {plans.map((plan, index) => (
            <PricingPlan
              key={index}
              name={plan.name}
              price={plan.price}
              isPopular={plan.isPopular}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans; 