import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { FiUsers, FiCalendar, FiMessageSquare, FiTrendingUp, FiClock, FiStar } from 'react-icons/fi';

const AdminDashboard = () => {
  // Dados mockados para exemplo
  const stats = [
    {
      id: 1,
      name: 'Total de Usuários',
      value: '2,543',
      icon: FiUsers,
      change: '+12%',
      changeType: 'increase',
    },
    {
      id: 2,
      name: 'Consultas do Mês',
      value: '187',
      icon: FiCalendar,
      change: '+3%',
      changeType: 'increase',
    },
    {
      id: 3,
      name: 'Mensagens Novas',
      value: '45',
      icon: FiMessageSquare,
      change: '-5%',
      changeType: 'decrease',
    },
    {
      id: 4,
      name: 'Taxa de Conversão',
      value: '15.3%',
      icon: FiTrendingUp,
      change: '+2.3%',
      changeType: 'increase',
    },
  ];

  const recentAppointments = [
    {
      id: 1,
      patient: 'Maria Silva',
      therapist: 'Dr. João Santos',
      date: '2024-03-20',
      time: '14:00',
      status: 'scheduled'
    },
    {
      id: 2,
      patient: 'Pedro Oliveira',
      therapist: 'Dra. Ana Costa',
      date: '2024-03-20',
      time: '15:30',
      status: 'completed'
    },
    {
      id: 3,
      patient: 'Lucia Ferreira',
      therapist: 'Dr. Carlos Mendes',
      date: '2024-03-21',
      time: '09:00',
      status: 'cancelled'
    }
  ];

  const topTherapists = [
    {
      id: 1,
      name: 'Dra. Ana Costa',
      specialty: 'Psicologia Clínica',
      rating: 4.9,
      consultations: 156
    },
    {
      id: 2,
      name: 'Dr. João Santos',
      specialty: 'Terapia Familiar',
      rating: 4.8,
      consultations: 142
    },
    {
      id: 3,
      name: 'Dr. Carlos Mendes',
      specialty: 'Psicologia Infantil',
      rating: 4.7,
      consultations: 128
    }
  ];

  const getStatusColor = (status: string) => {
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

  const getStatusText = (status: string) => {
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
      <div className="space-y-6 p-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600">Bem-vindo ao painel administrativo do Nandana</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
              >
                <dt>
                  <div className="absolute bg-green-600 rounded-md p-3">
                    <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                    {stat.name}
                  </p>
                </dt>
                <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                  <p className="text-2xl font-semibold text-gray-900">
                    {stat.value}
                  </p>
                  <p
                    className={`ml-2 flex items-baseline text-sm font-semibold ${
                      stat.changeType === 'increase'
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    {stat.change}
                  </p>
                </dd>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Próximas Consultas */}
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Próximas Consultas</h2>
              <FiClock className="h-5 w-5 text-gray-400" />
            </div>
            <div className="flow-root">
              <ul role="list" className="-my-5 divide-y divide-gray-200">
                {recentAppointments.map((appointment) => (
                  <li key={appointment.id} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {appointment.patient}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {appointment.therapist}
                        </p>
                      </div>
                      <div className="flex-shrink-0 text-sm text-gray-500">
                        {new Date(appointment.date).toLocaleDateString('pt-BR')} - {appointment.time}
                      </div>
                      <div>
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(appointment.status)}`}>
                          {getStatusText(appointment.status)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Top Terapeutas */}
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Top Terapeutas</h2>
              <FiStar className="h-5 w-5 text-gray-400" />
            </div>
            <div className="flow-root">
              <ul role="list" className="-my-5 divide-y divide-gray-200">
                {topTherapists.map((therapist) => (
                  <li key={therapist.id} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {therapist.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {therapist.specialty}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <FiStar className="h-4 w-4 text-yellow-400" />
                          <span className="ml-1 text-sm text-gray-500">{therapist.rating}</span>
                        </div>
                        <div className="flex items-center">
                          <FiCalendar className="h-4 w-4 text-gray-400" />
                          <span className="ml-1 text-sm text-gray-500">{therapist.consultations}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard; 