import React, { useState } from 'react';
import { useRouter } from 'next/router';
import AdminLayout from '@/components/admin/AdminLayout';
import { FiSave, FiX } from 'react-icons/fi';

interface ContentData {
  title: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  images?: { url: string; alt: string }[];
}

const EditContentPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Dados mockados - em produção viriam da API
  const [content, setContent] = useState<ContentData>({
    title: 'Bem-vindo ao Nandana',
    subtitle: 'Sua jornada de autoconhecimento começa aqui',
    description: 'Conectamos você aos melhores profissionais de saúde mental e bem-estar.',
    buttonText: 'Agende sua Consulta',
    buttonLink: '/agendar',
    images: [
      {
        url: '/images/hero-background.jpg',
        alt: 'Imagem de fundo do banner principal'
      }
    ]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar integração com API
    router.push('/admin/conteudo');
  };

  const handleCancel = () => {
    router.push('/admin/conteudo');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: Implementar upload de imagem
    console.log('Upload de imagem:', e.target.files?.[0]);
  };

  return (
    <AdminLayout>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Editar Conteúdo</h1>
          <p className="text-gray-600 mt-1">ID: {id}</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handleCancel}
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center space-x-2"
          >
            <FiX className="w-4 h-4" />
            <span>Cancelar</span>
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-white bg-nandana-green rounded-lg hover:bg-nandana-green-dark flex items-center space-x-2"
          >
            <FiSave className="w-4 h-4" />
            <span>Salvar Alterações</span>
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-6">
          {/* Título */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Título
            </label>
            <input
              type="text"
              id="title"
              value={content.title}
              onChange={(e) => setContent({ ...content, title: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-nandana-green focus:ring-nandana-green"
            />
          </div>

          {/* Subtítulo */}
          <div>
            <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700">
              Subtítulo
            </label>
            <input
              type="text"
              id="subtitle"
              value={content.subtitle}
              onChange={(e) => setContent({ ...content, subtitle: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-nandana-green focus:ring-nandana-green"
            />
          </div>

          {/* Descrição */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Descrição
            </label>
            <textarea
              id="description"
              rows={4}
              value={content.description}
              onChange={(e) => setContent({ ...content, description: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-nandana-green focus:ring-nandana-green"
            />
          </div>

          {/* Botão CTA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="buttonText" className="block text-sm font-medium text-gray-700">
                Texto do Botão
              </label>
              <input
                type="text"
                id="buttonText"
                value={content.buttonText}
                onChange={(e) => setContent({ ...content, buttonText: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-nandana-green focus:ring-nandana-green"
              />
            </div>
            <div>
              <label htmlFor="buttonLink" className="block text-sm font-medium text-gray-700">
                Link do Botão
              </label>
              <input
                type="text"
                id="buttonLink"
                value={content.buttonLink}
                onChange={(e) => setContent({ ...content, buttonLink: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-nandana-green focus:ring-nandana-green"
              />
            </div>
          </div>

          {/* Upload de Imagens */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Imagens</label>
            <div className="mt-2 flex items-center space-x-4">
              {content.images?.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="h-32 w-32 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const newImages = content.images?.filter((_, i) => i !== index);
                      setContent({ ...content, images: newImages });
                    }}
                    className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <label className="h-32 w-32 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg hover:border-nandana-green cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
                <span className="text-gray-600">Adicionar</span>
              </label>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Formatos suportados: JPG, PNG. Tamanho máximo: 5MB
            </p>
          </div>
        </div>
      </form>
    </AdminLayout>
  );
};

export default EditContentPage; 