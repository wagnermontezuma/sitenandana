import React, { useState } from 'react';
import Image from 'next/image';

interface TestimonialProps {
  name: string;
  role: string;
  testimonial: string;
  imageUrl: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, role, testimonial, imageUrl }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="mb-6">
        <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-700 mb-6 italic">{testimonial}</p>
      <div className="flex items-center">
        <div className="mr-4 relative h-14 w-14 overflow-hidden rounded-full border-2 border-green-500">
          <Image 
            src={imageUrl} 
            alt={name} 
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-gray-800">{name}</h4>
          <p className="text-green-600 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Dra. Ana Carolina',
      role: 'Psicóloga',
      imageUrl: '/images/testimonial-1.jpg',
      testimonial: 'A plataforma Nandana revolucionou minha prática clínica. A agenda online e o prontuário eletrônico otimizaram meu tempo e organização, permitindo que eu me concentre mais no atendimento aos pacientes.',
    },
    {
      id: 2,
      name: 'Dr. Roberto Silva',
      role: 'Nutricionista',
      imageUrl: '/images/testimonial-2.jpg',
      testimonial: 'Minha produtividade aumentou significativamente desde que comecei a usar o Nandana. O sistema financeiro é intuitivo e me ajuda a ter controle total sobre meus recebimentos e relatórios.',
    },
    {
      id: 3,
      name: 'Dra. Luciana Mendes',
      role: 'Fisioterapeuta',
      imageUrl: '/images/testimonial-3.jpg',
      testimonial: 'O consultório virtual do Nandana é excepcional. Consigo realizar consultas online com qualidade e segurança, expandindo meu atendimento para pacientes de diferentes regiões.',
    },
    {
      id: 4,
      name: 'Dr. Pedro Almeida',
      role: 'Terapeuta Ocupacional',
      imageUrl: '/images/testimonial-4.jpg',
      testimonial: 'O suporte ao cliente do Nandana é incrível. Sempre que preciso de ajuda, a equipe está pronta para resolver meus problemas. A plataforma é completa e atende todas as necessidades da minha clínica.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const displayTestimonials = testimonials.slice(activeIndex, activeIndex + 2);
  const hasNext = activeIndex + 2 < testimonials.length;
  const hasPrev = activeIndex > 0;

  const handlePrevious = () => {
    if (hasPrev) {
      setActiveIndex(activeIndex - 2);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      setActiveIndex(activeIndex + 2);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">O Que Nossos Usuários Dizem</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja como a plataforma Nandana tem ajudado profissionais de saúde a 
            otimizar seus atendimentos e melhorar seus resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {displayTestimonials.map((testimonial) => (
            <Testimonial 
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              testimonial={testimonial.testimonial}
              imageUrl={testimonial.imageUrl}
            />
          ))}
        </div>

        <div className="flex justify-center items-center space-x-4">
          <button 
            onClick={handlePrevious}
            className={`p-2 rounded-full border border-gray-300 transition-colors ${hasPrev ? 'hover:bg-green-100 text-green-600' : 'text-gray-300 cursor-not-allowed'}`}
            disabled={!hasPrev}
            aria-label="Depoimentos anteriores"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex space-x-2">
            {testimonials.map((_, index) => index % 2 === 0 && (
              <span 
                key={index} 
                className={`block w-2 h-2 rounded-full ${activeIndex === index ? 'bg-green-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
          <button 
            onClick={handleNext}
            className={`p-2 rounded-full border border-gray-300 transition-colors ${hasNext ? 'hover:bg-green-100 text-green-600' : 'text-gray-300 cursor-not-allowed'}`}
            disabled={!hasNext}
            aria-label="Próximos depoimentos"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 