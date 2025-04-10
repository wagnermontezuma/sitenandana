import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProfessionalCardProps {
  name: string;
  profession: string;
  imageUrl: string;
  specialties: string[];
}

const ProfessionalCard: React.FC<ProfessionalCardProps> = ({
  name,
  profession,
  imageUrl,
  specialties,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={`${name} - ${profession}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-4 left-4 text-white">
            <div className="flex items-center mb-1">
              <span className="text-sm font-medium">{profession}</span>
            </div>
            <h3 className="text-xl font-bold">{name}</h3>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-4">
          <h4 className="text-green-600 font-medium mb-2">Áreas de Atuação</h4>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <span
                key={index}
                className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
        
        <Link
          href={`/profissionais/${name.toLowerCase().replace(/\s+/g, '-')}`}
          className="block w-full py-3 bg-[#f97316] hover:bg-[#ea580c] text-white text-center font-medium rounded-md transition-colors duration-300"
        >
          Agende Agora
        </Link>
      </div>
    </div>
  );
};

const ProfessionalSearch: React.FC = () => {
  // Primeira fileira de profissionais
  const firstRowProfessionals = [
    {
      id: 1,
      name: 'Carlos Silva',
      profession: 'Psicólogo',
      imageUrl: '/images/professional-1.jpg',
      specialties: ['Para adultos', 'Casal', 'Infantil'],
    },
    {
      id: 2,
      name: 'Maria Andrade',
      profession: 'Psicóloga',
      imageUrl: '/images/professional-2.jpg',
      specialties: ['Para adultos', 'Casal', 'Grupo'],
    },
    {
      id: 3,
      name: 'Camila Sampaio',
      profession: 'Psicóloga',
      imageUrl: '/images/professional-3.jpg',
      specialties: ['Para adultos', 'Casal', 'Empresa'],
    },
    {
      id: 4,
      name: 'Breno Monteiro',
      profession: 'Psicólogo',
      imageUrl: '/images/professional-4.jpg',
      specialties: ['Para adultos', 'Casal', 'Infantil'],
    },
  ];

  // Segunda fileira de profissionais
  const secondRowProfessionals = [
    {
      id: 5,
      name: 'Cintia Sousa',
      profession: 'Psicóloga',
      imageUrl: '/images/professional-5.jpg',
      specialties: ['Para adultos', 'Casal', 'Infantil'],
    },
    {
      id: 6,
      name: 'Amanda Barros',
      profession: 'Psicóloga',
      imageUrl: '/images/professional-6.jpg',
      specialties: ['Para adultos', 'Casal', 'Infantil'],
    },
    {
      id: 7,
      name: 'Joaquim Melo',
      profession: 'Psicólogo',
      imageUrl: '/images/professional-7.jpg',
      specialties: ['Para adultos', 'Casal', 'Infantil'],
    },
    {
      id: 8,
      name: 'Carla Pedroso',
      profession: 'Psicóloga',
      imageUrl: '/images/professional-8.jpg',
      specialties: ['Para adultos', 'Casal', 'Infantil'],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-gray-600 mb-2">Atendimento único e especializado</p>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Encontre um profissional</h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar profissional"
                  className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-64">
              <div className="relative">
                <select className="w-full appearance-none pl-4 pr-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                  <option value="">Filtrar por</option>
                  <option value="psicologia">Psicologia</option>
                  <option value="nutricao">Nutrição</option>
                  <option value="fisioterapia">Fisioterapia</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Primeira fileira de profissionais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {firstRowProfessionals.map((professional) => (
            <ProfessionalCard
              key={professional.id}
              name={professional.name}
              profession={professional.profession}
              imageUrl={professional.imageUrl}
              specialties={professional.specialties}
            />
          ))}
        </div>
        
        {/* Segunda fileira de profissionais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {secondRowProfessionals.map((professional) => (
            <ProfessionalCard
              key={professional.id}
              name={professional.name}
              profession={professional.profession}
              imageUrl={professional.imageUrl}
              specialties={professional.specialties}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSearch; 