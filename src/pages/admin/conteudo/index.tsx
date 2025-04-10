import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { FiEdit2, FiImage, FiType, FiLink } from 'react-icons/fi';
import Link from 'next/link';

interface ContentSection {
  id: string;
  title: string;
  description: string;
  type: 'banner' | 'section' | 'cta';
  location: string;
}

const ContentPage = () => {
  const contentSections: ContentSection[] = [
    {
      id: 'hero',
      title: 'Banner Principal',
      description: 'Banner de destaque na página inicial',
      type: 'banner',
      location: 'Página Inicial',
    },
    {
      id: 'connect-talent',
      title: 'Conecte seu Talento',
      description: 'Seção para captação de profissionais',
      type: 'cta',
      location: 'Página Inicial',
    },
    {
      id: 'about',
      title: 'Sobre Nós',
      description: 'Seção com informações sobre o Nandana',
      type: 'section',
      location: 'Página Inicial',
    },
    {
      id: 'why-choose',
      title: 'Por que Escolher',
      description: 'Seção com diferenciais do Nandana',
      type: 'section',
      location: 'Página Inicial',
    },
    {
      id: 'testimonials',
      title: 'Depoimentos',
      description: 'Seção de depoimentos de clientes',
      type: 'section',
      location: 'Página Inicial',
    },
  ];

  const getTypeIcon = (type: ContentSection['type']) => {
    switch (type) {
      case 'banner':
        return <FiImage className="w-5 h-5" />;
      case 'section':
        return <FiType className="w-5 h-5" />;
      case 'cta':
        return <FiLink className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const getTypeText = (type: ContentSection['type']) => {
    switch (type) {
      case 'banner':
        return 'Banner';
      case 'section':
        return 'Seção';
      case 'cta':
        return 'Chamada para Ação';
      default:
        return type;
    }
  };

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Conteúdo do Site</h1>
        <p className="text-gray-600 mt-1">Gerencie o conteúdo das páginas do site</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contentSections.map((section) => (
          <div key={section.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-nandana-green bg-opacity-10 rounded-lg text-nandana-green">
                  {getTypeIcon(section.type)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{section.title}</h3>
                  <p className="text-sm text-gray-500">{section.location}</p>
                </div>
              </div>
              <Link
                href={`/admin/conteudo/${section.id}`}
                className="p-2 text-gray-400 hover:text-nandana-green transition-colors"
              >
                <FiEdit2 className="w-5 h-5" />
              </Link>
            </div>
            
            <p className="mt-4 text-sm text-gray-600">{section.description}</p>
            
            <div className="mt-4 flex items-center">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                {getTypeText(section.type)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default ContentPage; 