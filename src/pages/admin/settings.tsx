import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { FiSave } from 'react-icons/fi';

interface SystemSettings {
  siteName: string;
  siteDescription: string;
  contactEmail: string;
  supportPhone: string;
  address: string;
  socialMedia: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
  notifications: {
    emailOnNewAppointment: boolean;
    emailOnCancellation: boolean;
    emailOnMessage: boolean;
  };
  appointments: {
    minDurationMinutes: number;
    maxDurationMinutes: number;
    allowWeekends: boolean;
    workHourStart: string;
    workHourEnd: string;
  };
}

const SettingsPage = () => {
  const [settings, setSettings] = useState<SystemSettings>({
    siteName: 'Nandana Terapias',
    siteDescription: 'Plataforma de agendamento de consultas terapêuticas',
    contactEmail: 'contato@nandana.com.br',
    supportPhone: '(11) 99999-9999',
    address: 'Rua Exemplo, 123 - São Paulo, SP',
    socialMedia: {
      facebook: 'https://facebook.com/nandana',
      instagram: 'https://instagram.com/nandana',
      linkedin: 'https://linkedin.com/company/nandana'
    },
    notifications: {
      emailOnNewAppointment: true,
      emailOnCancellation: true,
      emailOnMessage: true
    },
    appointments: {
      minDurationMinutes: 30,
      maxDurationMinutes: 120,
      allowWeekends: false,
      workHourStart: '08:00',
      workHourEnd: '18:00'
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar integração com API
    alert('Configurações salvas com sucesso!');
  };

  return (
    <AdminLayout>
      <div className="space-y-6 p-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Configurações do Sistema</h1>
          <p className="text-gray-600">Gerencie as configurações gerais da plataforma</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informações Básicas */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Informações Básicas</h2>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="siteName" className="block text-sm font-medium text-gray-700">
                  Nome do Site
                </label>
                <input
                  type="text"
                  id="siteName"
                  value={settings.siteName}
                  onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="siteDescription" className="block text-sm font-medium text-gray-700">
                  Descrição
                </label>
                <textarea
                  id="siteDescription"
                  rows={3}
                  value={settings.siteDescription}
                  onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
                    Email de Contato
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    value={settings.contactEmail}
                    onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="supportPhone" className="block text-sm font-medium text-gray-700">
                    Telefone de Suporte
                  </label>
                  <input
                    type="text"
                    id="supportPhone"
                    value={settings.supportPhone}
                    onChange={(e) => setSettings({ ...settings, supportPhone: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Endereço
                </label>
                <input
                  type="text"
                  id="address"
                  value={settings.address}
                  onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Redes Sociais</h2>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">
                  Facebook
                </label>
                <input
                  type="url"
                  id="facebook"
                  value={settings.socialMedia.facebook}
                  onChange={(e) => setSettings({
                    ...settings,
                    socialMedia: { ...settings.socialMedia, facebook: e.target.value }
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">
                  Instagram
                </label>
                <input
                  type="url"
                  id="instagram"
                  value={settings.socialMedia.instagram}
                  onChange={(e) => setSettings({
                    ...settings,
                    socialMedia: { ...settings.socialMedia, instagram: e.target.value }
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
                  LinkedIn
                </label>
                <input
                  type="url"
                  id="linkedin"
                  value={settings.socialMedia.linkedin}
                  onChange={(e) => setSettings({
                    ...settings,
                    socialMedia: { ...settings.socialMedia, linkedin: e.target.value }
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
            </div>
          </div>

          {/* Notificações */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Notificações</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="emailOnNewAppointment"
                  checked={settings.notifications.emailOnNewAppointment}
                  onChange={(e) => setSettings({
                    ...settings,
                    notifications: {
                      ...settings.notifications,
                      emailOnNewAppointment: e.target.checked
                    }
                  })}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="emailOnNewAppointment" className="ml-2 block text-sm text-gray-900">
                  Enviar email quando houver novo agendamento
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="emailOnCancellation"
                  checked={settings.notifications.emailOnCancellation}
                  onChange={(e) => setSettings({
                    ...settings,
                    notifications: {
                      ...settings.notifications,
                      emailOnCancellation: e.target.checked
                    }
                  })}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="emailOnCancellation" className="ml-2 block text-sm text-gray-900">
                  Enviar email quando houver cancelamento
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="emailOnMessage"
                  checked={settings.notifications.emailOnMessage}
                  onChange={(e) => setSettings({
                    ...settings,
                    notifications: {
                      ...settings.notifications,
                      emailOnMessage: e.target.checked
                    }
                  })}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="emailOnMessage" className="ml-2 block text-sm text-gray-900">
                  Enviar email quando houver nova mensagem
                </label>
              </div>
            </div>
          </div>

          {/* Configurações de Agendamento */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Configurações de Agendamento</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="minDuration" className="block text-sm font-medium text-gray-700">
                  Duração Mínima (minutos)
                </label>
                <input
                  type="number"
                  id="minDuration"
                  min="15"
                  step="15"
                  value={settings.appointments.minDurationMinutes}
                  onChange={(e) => setSettings({
                    ...settings,
                    appointments: {
                      ...settings.appointments,
                      minDurationMinutes: parseInt(e.target.value)
                    }
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="maxDuration" className="block text-sm font-medium text-gray-700">
                  Duração Máxima (minutos)
                </label>
                <input
                  type="number"
                  id="maxDuration"
                  min="30"
                  step="15"
                  value={settings.appointments.maxDurationMinutes}
                  onChange={(e) => setSettings({
                    ...settings,
                    appointments: {
                      ...settings.appointments,
                      maxDurationMinutes: parseInt(e.target.value)
                    }
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="workHourStart" className="block text-sm font-medium text-gray-700">
                  Horário de Início
                </label>
                <input
                  type="time"
                  id="workHourStart"
                  value={settings.appointments.workHourStart}
                  onChange={(e) => setSettings({
                    ...settings,
                    appointments: {
                      ...settings.appointments,
                      workHourStart: e.target.value
                    }
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="workHourEnd" className="block text-sm font-medium text-gray-700">
                  Horário de Término
                </label>
                <input
                  type="time"
                  id="workHourEnd"
                  value={settings.appointments.workHourEnd}
                  onChange={(e) => setSettings({
                    ...settings,
                    appointments: {
                      ...settings.appointments,
                      workHourEnd: e.target.value
                    }
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div className="md:col-span-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="allowWeekends"
                    checked={settings.appointments.allowWeekends}
                    onChange={(e) => setSettings({
                      ...settings,
                      appointments: {
                        ...settings.appointments,
                        allowWeekends: e.target.checked
                      }
                    })}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label htmlFor="allowWeekends" className="ml-2 block text-sm text-gray-900">
                    Permitir agendamentos nos finais de semana
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Botão Salvar */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors"
            >
              <FiSave className="w-5 h-5" />
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default SettingsPage; 