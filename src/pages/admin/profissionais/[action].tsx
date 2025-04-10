import React from 'react';
import { useRouter } from 'next/router';
import AdminLayout from '@/components/admin/AdminLayout';
import { FiSave, FiX } from 'react-icons/fi';

const ProfessionalForm = () => {
  const router = useRouter();
  const { action } = router.query;
  const isEditing = action === 'editar';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar lógica de salvamento
    router.push('/admin/profissionais');
  };

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          {isEditing ? 'Editar Profissional' : 'Novo Profissional'}
        </h1>
        <p className="text-gray-600 mt-1">
          {isEditing
            ? 'Atualize as informações do profissional'
            : 'Preencha as informações para cadastrar um novo profissional'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          {/* Informações Básicas */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Informações Básicas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nandana-green"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nandana-green"
                  required
                />
              </div>
              <div>
                <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-1">
                  Profissão
                </label>
                <select
                  id="profession"
                  name="profession"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nandana-green"
                  required
                >
                  <option value="">Selecione...</option>
                  <option value="psicologo">Psicólogo(a)</option>
                  <option value="nutricionista">Nutricionista</option>
                  <option value="fisioterapeuta">Fisioterapeuta</option>
                </select>
              </div>
              <div>
                <label htmlFor="crp" className="block text-sm font-medium text-gray-700 mb-1">
                  Registro Profissional (CRP/CRN/etc)
                </label>
                <input
                  type="text"
                  id="crp"
                  name="crp"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nandana-green"
                  required
                />
              </div>
            </div>
          </div>

          {/* Especialidades */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Especialidades</h2>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                {['Adultos', 'Casal', 'Infantil', 'Grupo', 'Empresa'].map((specialty) => (
                  <label key={specialty} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="specialties"
                      value={specialty}
                      className="rounded border-gray-300 text-nandana-green focus:ring-nandana-green"
                    />
                    <span className="ml-2 text-sm text-gray-700">{specialty}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Sobre */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Sobre</h2>
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                Biografia
              </label>
              <textarea
                id="bio"
                name="bio"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nandana-green"
                placeholder="Conte um pouco sobre sua experiência e abordagem..."
              />
            </div>
          </div>

          {/* Valores */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="sessionPrice" className="block text-sm font-medium text-gray-700 mb-1">
                  Valor da Sessão
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                    R$
                  </span>
                  <input
                    type="number"
                    id="sessionPrice"
                    name="sessionPrice"
                    min="0"
                    step="0.01"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nandana-green"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="sessionDuration" className="block text-sm font-medium text-gray-700 mb-1">
                  Duração da Sessão (minutos)
                </label>
                <input
                  type="number"
                  id="sessionDuration"
                  name="sessionDuration"
                  min="30"
                  step="15"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nandana-green"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Botões */}
        <div className="mt-6 flex justify-end gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nandana-green flex items-center"
          >
            <FiX className="w-5 h-5 mr-2" />
            Cancelar
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-nandana-green hover:bg-nandana-green-dark text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nandana-green flex items-center"
          >
            <FiSave className="w-5 h-5 mr-2" />
            Salvar
          </button>
        </div>
      </form>
    </AdminLayout>
  );
};

export default ProfessionalForm; 