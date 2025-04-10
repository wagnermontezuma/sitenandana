import React from 'react';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';

interface Plan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  recommended?: boolean;
}

interface PricingPlanProps {
  name: string;
  price: number;
  isPopular?: boolean;
  features: string[];
}

interface PricingPlansProps {
  onPlanClick?: (plan: Plan) => void;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ name, price, isPopular = false, features }) => {
  return (
    <div className={`relative p-8 bg-white rounded-lg shadow-lg ${isPopular ? 'border-2 border-primary-500' : ''}`}>
      {isPopular && (
        <span className="absolute top-0 right-0 px-3 py-1 text-sm font-semibold text-white transform translate-x-2 -translate-y-1/2 bg-primary-500 rounded-full">
          Popular
        </span>
      )}
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      <p className="mt-4">
        <span className="text-4xl font-extrabold text-gray-900">R${price}</span>
        <span className="text-base font-medium text-gray-500">/mês</span>
      </p>
      <ul className="mt-6 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0">
              <FiCheck className="w-5 h-5 text-primary-500" />
            </div>
            <p className="ml-3 text-gray-600">{feature}</p>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link href="/signup" className="block w-full px-6 py-3 text-base font-medium text-center text-white bg-primary-600 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
          Começar agora
        </Link>
      </div>
    </div>
  );
};

const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Básico',
    price: 99,
    description: 'Ideal para começar',
    features: [
      'Até 4 consultas por mês',
      'Chat com terapeuta',
      'Recursos básicos da plataforma',
      'Suporte por email'
    ]
  },
  {
    id: 'pro',
    name: 'Profissional',
    price: 199,
    description: 'Para quem precisa de mais',
    features: [
      'Até 8 consultas por mês',
      'Chat prioritário com terapeuta',
      'Todos os recursos da plataforma',
      'Suporte prioritário 24/7',
      'Sessões de grupo inclusas'
    ],
    recommended: true
  },
  {
    id: 'enterprise',
    name: 'Empresarial',
    price: 399,
    description: 'Solução completa para empresas',
    features: [
      'Consultas ilimitadas',
      'Atendimento VIP',
      'Recursos exclusivos',
      'Gerenciamento de equipe',
      'Relatórios personalizados',
      'API dedicada'
    ]
  }
];

export const PricingPlans: React.FC<PricingPlansProps> = ({ onPlanClick }) => {
  return (
    <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
      {plans.map((plan) => (
        <div key={plan.id} onClick={() => onPlanClick?.(plan)}>
          <PricingPlan
            name={plan.name}
            price={plan.price}
            features={plan.features}
            isPopular={plan.recommended}
          />
        </div>
      ))}
    </div>
  );
};

export default PricingPlans; 