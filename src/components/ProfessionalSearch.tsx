import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiSearch, FiMapPin } from 'react-icons/fi';

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
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {specialties.map((specialty, index) => (
              <span
                key={index}
                className="inline-block text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full flex-shrink-0"
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

interface ProfessionalSearchProps {
  onSearchClick?: () => void;
}

export function ProfessionalSearch({ onSearchClick }: ProfessionalSearchProps) {
  const [specialty, setSpecialty] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchClick?.();
  };

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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Encontre o profissional ideal para você
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Busque por especialidade ou localização e conecte-se com profissionais qualificados
          </p>

          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar por especialidade..."
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="relative">
                <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Localização..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="px-8 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ProfessionalSearch; 