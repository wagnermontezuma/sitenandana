import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { FiSave } from 'react-icons/fi';

const SettingsPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar lógica de salvamento
  };

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Configurações</h1>
        <p className="text-gray-600 mt-1">Gerencie as configurações do sistema</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl">
        <div className="space-y-6">
          {/* Configurações Gerais */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Configurações Gerais</h2>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="siteName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome do Site
                </label>
                <input
                  type="text"
                  id="siteName"
                  name="siteName"
                  defaultValue="Nandana Terapias"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nandana-green"
                />
              </div>
              <div>
                <label htmlFor="siteDescription" className="block text-sm font-medium text-gray-700 mb-1">
                  Descrição do Site
                </label>
                <textarea
                  id="siteDescription"
                  name="siteDescription"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nandana-green"
                  defaultValue="Plataforma de agendamento de consultas terapêuticas"
                />
              </div>
            </div>
          </div>

          {/* Configurações de Contato */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Informações de Contato</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail de Contato
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue="contato@nandana.com.br"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nandana-green"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  defaultValue="(11) 99999-9999"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nandana-green"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Endereço
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  defaultValue="Rua Exemplo, 123 - São Paulo, SP"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nandana-green"
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  defaultValue="(11) 99999-9999"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nandana-green"
                />
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Redes Sociais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="facebook" className="block text-sm font-medium text-gray-700 mb-1">
                  Facebook
                </label>
                <input
                  type="url"
                  id="facebook"
                  name="facebook"
                  placeholder="https://facebook.com/nandana"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nandana-green"
                />
              </div>
              <div>
                <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-1">
                  Instagram
                </label>
                <input
                  type="url"
                  id="instagram"
                  name="instagram"
                  placeholder="https://instagram.com/nandana"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nandana-green"
                />
              </div>
              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                  LinkedIn
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  placeholder="https://linkedin.com/company/nandana"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nandana-green"
                />
              </div>
              <div>
                <label htmlFor="youtube" className="block text-sm font-medium text-gray-700 mb-1">
                  YouTube
                </label>
                <input
                  type="url"
                  id="youtube"
                  name="youtube"
                  placeholder="https://youtube.com/nandana"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nandana-green"
                />
              </div>
            </div>
          </div>

          {/* Configurações de E-mail */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Configurações de E-mail</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="smtpHost" className="block text-sm font-medium text-gray-700 mb-1">
                  Servidor SMTP
                </label>
                <input
                  type="text"
                  id="smtpHost"
                  name="smtpHost"
                  placeholder="smtp.exemplo.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nandana-green"
                />
              </div>
              <div>
                <label htmlFor="smtpPort" className="block text-sm font-medium text-gray-700 mb-1">
                  Porta SMTP
                </label>
                <input
                  type="number"
                  id="smtpPort"
                  name="smtpPort"
                  placeholder="587"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nandana-green"
                />
              </div>
              <div>
                <label htmlFor="smtpUser" className="block text-sm font-medium text-gray-700 mb-1">
                  Usuário SMTP
                </label>
                <input
                  type="text"
                  id="smtpUser"
                  name="smtpUser"
                  placeholder="seu@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nandana-green"
                />
              </div>
              <div>
                <label htmlFor="smtpPass" className="block text-sm font-medium text-gray-700 mb-1">
                  Senha SMTP
                </label>
                <input
                  type="password"
                  id="smtpPass"
                  name="smtpPass"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nandana-green"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Botão Salvar */}
        <div className="mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-nandana-green hover:bg-nandana-green-dark text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nandana-green flex items-center"
          >
            <FiSave className="w-5 h-5 mr-2" />
            Salvar Configurações
          </button>
        </div>
      </form>
    </AdminLayout>
  );
};

export default SettingsPage; 