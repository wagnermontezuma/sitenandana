import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { FiCalendar, FiClock, FiUser, FiTag } from 'react-icons/fi';

interface Consultation {
  id: number;
  patient: string;
  professional: string;
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  type: string;
}

const ConsultationsPage = () => {
  const [consultations] = useState<Consultation[]>([
    {
      id: 1,
      patient: 'João Silva',
      professional: 'Dra. Maria Andrade',
      date: '2024-02-20',
      time: '14:00',
      status: 'scheduled',
      type: 'Primeira Consulta',
    },
    {
      id: 2,
      patient: 'Ana Paula',
      professional: 'Dr. Carlos Silva',
      date: '2024-02-20',
      time: '15:30',
      status: 'completed',
      type: 'Retorno',
    },
    // Adicione mais consultas conforme necessário
  ]);

  const getStatusColor = (status: Consultation['status']) => {
    switch (status) {
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: Consultation['status']) => {
    switch (status) {
      case 'scheduled':
        return 'Agendada';
      case 'completed':
        return 'Realizada';
      case 'cancelled':
        return 'Cancelada';
      default:
        return status;
    }
  };

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Consultas</h1>
        <p className="text-gray-600 mt-1">Gerencie as consultas agendadas</p>
      </div>

      {/* Filtros */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Data
            </label>
            <input
              type="date"
              id="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nandana-green"
            />
          </div>
          <div>
            <label htmlFor="professional" className="block text-sm font-medium text-gray-700 mb-1">
              Profissional
            </label>
            <select
              id="professional"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nandana-green"
            >
              <option value="">Todos</option>
              <option value="1">Dra. Maria Andrade</option>
              <option value="2">Dr. Carlos Silva</option>
            </select>
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              id="status"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nandana-green"
            >
              <option value="">Todos</option>
              <option value="scheduled">Agendada</option>
              <option value="completed">Realizada</option>
              <option value="cancelled">Cancelada</option>
            </select>
          </div>
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
              Tipo
            </label>
            <select
              id="type"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nandana-green"
            >
              <option value="">Todos</option>
              <option value="first">Primeira Consulta</option>
              <option value="return">Retorno</option>
            </select>
          </div>
        </div>
      </div>

      {/* Lista de Consultas */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Paciente
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Profissional
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data/Hora
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {consultations.map((consultation) => (
                <tr key={consultation.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FiUser className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-sm text-gray-900">{consultation.patient}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FiUser className="w-5 h-5 text-nandana-green mr-3" />
                      <span className="text-sm text-gray-900">{consultation.professional}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FiCalendar className="w-5 h-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-900">
                        {new Date(consultation.date).toLocaleDateString('pt-BR')}
                      </span>
                      <FiClock className="w-5 h-5 text-gray-400 ml-4 mr-2" />
                      <span className="text-sm text-gray-900">{consultation.time}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FiTag className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-sm text-gray-900">{consultation.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        consultation.status
                      )}`}
                    >
                      {getStatusText(consultation.status)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ConsultationsPage; 