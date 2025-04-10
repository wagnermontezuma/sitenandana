import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';
import Link from 'next/link';

interface Professional {
  id: number;
  name: string;
  profession: string;
  specialties: string[];
  status: 'active' | 'inactive';
  consultations: number;
}

const ProfessionalsPage = () => {
  const [professionals] = useState<Professional[]>([
    {
      id: 1,
      name: 'Dr. Carlos Silva',
      profession: 'Psicólogo',
      specialties: ['Adultos', 'Casal', 'Infantil'],
      status: 'active',
      consultations: 128,
    },
    {
      id: 2,
      name: 'Dra. Maria Andrade',
      profession: 'Psicóloga',
      specialties: ['Adultos', 'Casal', 'Grupo'],
      status: 'active',
      consultations: 96,
    },
    // Adicione mais profissionais conforme necessário
  ]);

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Profissionais</h1>
          <p className="text-gray-600 mt-1">Gerencie os profissionais cadastrados</p>
        </div>
        <Link
          href="/admin/profissionais/novo"
          className="bg-nandana-green hover:bg-nandana-green-dark text-white px-4 py-2 rounded-lg flex items-center transition-colors"
        >
          <FiPlus className="mr-2" />
          Novo Profissional
        </Link>
      </div>

      {/* Filtros e Busca */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <input
              type="text"
              placeholder="Buscar profissional..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nandana-green"
            />
          </div>
          <div className="flex gap-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nandana-green">
              <option value="">Todas Especialidades</option>
              <option value="psicologia">Psicologia</option>
              <option value="nutricao">Nutrição</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nandana-green">
              <option value="">Status</option>
              <option value="active">Ativo</option>
              <option value="inactive">Inativo</option>
            </select>
          </div>
        </div>
      </div>

      {/* Lista de Profissionais */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Profissional
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Especialidades
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Consultas
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {professionals.map((professional) => (
              <tr key={professional.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <div className="h-10 w-10 rounded-full bg-nandana-green bg-opacity-10 flex items-center justify-center">
                        <span className="text-nandana-green font-medium">
                          {professional.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {professional.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {professional.profession}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-wrap gap-2">
                    {professional.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      professional.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {professional.status === 'active' ? 'Ativo' : 'Inativo'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {professional.consultations} consultas
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    className="text-nandana-green hover:text-nandana-green-dark mr-3"
                    title="Editar"
                  >
                    <FiEdit2 className="w-5 h-5" />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    title="Excluir"
                  >
                    <FiTrash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default ProfessionalsPage; 