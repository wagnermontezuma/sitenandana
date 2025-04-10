import React, { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-green-400/30">
      <button
        className="w-full flex items-center justify-between py-6 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg text-white font-medium">{question}</h3>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-white/90">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqSection: React.FC = () => {
  const faqs = [
    {
      id: 1,
      question: "Como faço para me cadastrar na plataforma Nandana?",
      answer: "Para se cadastrar, clique no botão 'Login/Cadastro' no topo da página e siga as instruções para criar sua conta. O processo é simples e leva apenas alguns minutos."
    },
    {
      id: 2,
      question: "Quais especialidades terapêuticas estão disponíveis na Nandana?",
      answer: "A Nandana oferece uma ampla variedade de especialidades terapêuticas, incluindo psicologia, fisioterapia, nutrição, acupuntura, aromaterapia, massoterapia, reiki e muito mais."
    },
    {
      id: 3,
      question: "Como funciona o sistema de agendamento de consultas?",
      answer: "O sistema de agendamento é intuitivo e permite marcar consultas em poucos cliques. Você pode visualizar a disponibilidade dos profissionais, escolher o horário que melhor se adequa à sua agenda e receber confirmação imediata."
    },
    {
      id: 4,
      question: "Posso cancelar ou reagendar uma consulta?",
      answer: "Sim, você pode cancelar ou reagendar consultas através da plataforma, respeitando a política de cancelamento de cada profissional, geralmente com até 24 horas de antecedência."
    }
  ];

  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prevOpenItems => 
      prevOpenItems.includes(id) 
        ? prevOpenItems.filter(itemId => itemId !== id) 
        : [...prevOpenItems, id]
    );
  };

  return (
    <section className="py-20 bg-green-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 mb-10 lg:mb-0">
            <p className="text-green-50 mb-2">Tire suas dúvidas</p>
            <h2 className="text-4xl font-bold text-white mb-4">
              Perguntas<br />
              Frequentes
            </h2>
            <p className="text-white/90 mb-8">
              Aqui você encontra respostas rápidas sobre 
              nossos serviços, agendamentos, profissionais 
              e muito mais.
            </p>
            <a 
              href="/faq" 
              className="inline-block px-8 py-3 bg-white text-green-600 font-medium rounded-md hover:bg-green-50 transition-colors"
            >
              Ver mais perguntas
            </a>
          </div>
          
          <div className="lg:w-2/3 lg:pl-20">
            <div className="space-y-0">
              {faqs.map(faq => (
                <FaqItem
                  key={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openItems.includes(faq.id)}
                  onToggle={() => toggleItem(faq.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection; 