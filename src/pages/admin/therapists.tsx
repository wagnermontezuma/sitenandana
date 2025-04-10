import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { FiSearch, FiEdit2, FiTrash2, FiUserPlus, FiCheck, FiX, FiPlus } from 'react-icons/fi';

interface Therapist {
  id: number;
  name: string;
  email: string;
  specialty: string;
  verified: boolean;
  rating: number;
  consultations: number;
  status: 'active' | 'inactive' | 'pending';
}

const TherapistsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [specialtyFilter, setSpecialtyFilter] = useState('all');
  
  // Dados mockados para exemplo
  const therapists: Therapist[] = [
    {
      id: 1,
      name: 'Dra. Maria Silva',
      email: 'maria@exemplo.com',
      specialty: 'Psicologia Clínica',
      verified: true,
      rating: 4.8,
      consultations: 156,
      status: 'active',
    },
    {
      id: 2,
      name: 'Dr. João Santos',
      email: 'joao@exemplo.com',
      specialty: 'Terapia Familiar',
      verified: true,
      rating: 4.5,
      consultations: 89,
      status: 'active',
    },
    {
      id: 3,
      name: 'Dra. Ana Oliveira',
      email: 'ana@exemplo.com',
      specialty: 'Psicologia Infantil',
      verified: false,
      rating: 0,
      consultations: 0,
      status: 'pending',
    },
  ];

  const filteredTherapists = therapists.filter(therapist => {
    const matchesSearch = 
      therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      therapist.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      therapist.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || therapist.status === statusFilter;
    const matchesSpecialty = specialtyFilter === 'all' || therapist.specialty === specialtyFilter;
    
    return matchesSearch && matchesStatus && matchesSpecialty;
  });

  return (
    <AdminLayout>
      <div className="space-y-6 p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Gerenciamento de Terapeutas</h1>
            <p className="text-gray-600">Gerencie os terapeutas cadastrados na plataforma</p>
          </div>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors"
            onClick={() => alert('Adicionar novo terapeuta')}
          >
            <FiPlus className="w-5 h-5" />
            Novo Terapeuta
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Buscar
              </label>
              <input
                type="text"
                id="search"
                className="w-full rounded-lg border-gray-300 focus:border-green-500 focus:ring-green-500"
                placeholder="Nome, email ou especialidade"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                id="status"
                className="w-full rounded-lg border-gray-300 focus:border-green-500 focus:ring-green-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
              >
                <option value="all">Todos</option>
                <option value="active">Ativo</option>
                <option value="inactive">Inativo</option>
                <option value="pending">Pendente</option>
              </select>
            </div>

            <div>
              <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">
                Especialidade
              </label>
              <select
                id="specialty"
                className="w-full rounded-lg border-gray-300 focus:border-green-500 focus:ring-green-500"
                value={specialtyFilter}
                onChange={(e) => setSpecialtyFilter(e.target.value)}
              >
                <option value="all">Todas</option>
                <option value="Psicologia Clínica">Psicologia Clínica</option>
                <option value="Terapia Familiar">Terapia Familiar</option>
                {/* Adicione mais especialidades conforme necessário */}
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nome
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Especialidade
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Métricas
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredTherapists.map((therapist) => (
                  <tr key={therapist.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{therapist.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{therapist.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{therapist.specialty}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        therapist.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : therapist.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {therapist.status === 'active' ? 'Ativo' 
                          : therapist.status === 'pending' ? 'Pendente' 
                          : 'Inativo'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        <div>Consultas: {therapist.consultations}</div>
                        <div>Avaliação: {therapist.rating.toFixed(1)}/5</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex gap-3">
                        <button
                          onClick={() => alert(`Editar ${therapist.name}`)}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <FiEdit2 className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => alert(`Excluir ${therapist.name}`)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <FiTrash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default TherapistsPage; 