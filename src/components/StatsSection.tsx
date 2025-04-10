import React from 'react';

interface StatItemProps {
  emoji: string;
  number: string;
  text: string;
}

const StatItem: React.FC<StatItemProps> = ({ emoji, number, text }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-3 text-white text-2xl">
        {emoji}
      </div>
      <h3 className="text-5xl font-bold text-gray-700 mb-1">{number}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    {
      id: 1,
      emoji: '👥',
      number: '+200',
      text: 'Profissionais'
    },
    {
      id: 2,
      emoji: '⏱️',
      number: '+500',
      text: 'Pacientes regulares'
    },
    {
      id: 3,
      emoji: '❤️',
      number: '+3000',
      text: 'Tratamentos finalizados'
    },
    {
      id: 4,
      emoji: '📅',
      number: '+10',
      text: 'Anos de Mercado'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatItem
              key={stat.id}
              emoji={stat.emoji}
              number={stat.number}
              text={stat.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 