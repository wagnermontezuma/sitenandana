import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { FiMessageSquare, FiStar, FiTrash2, FiMail } from 'react-icons/fi';

interface Message {
  id: number;
  sender: string;
  subject: string;
  content: string;
  date: string;
  read: boolean;
  important: boolean;
  category: 'support' | 'contact' | 'feedback';
}

const MessagesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  // Dados mockados para exemplo
  const messages: Message[] = [
    {
      id: 1,
      sender: 'Maria Oliveira',
      subject: 'Dúvida sobre agendamento',
      content: 'Olá, gostaria de saber como faço para remarcar minha consulta...',
      date: '2024-03-20T14:30:00',
      read: false,
      important: true,
      category: 'support'
    },
    {
      id: 2,
      sender: 'João Silva',
      subject: 'Feedback da plataforma',
      content: 'Quero parabenizar pelo excelente serviço...',
      date: '2024-03-19T10:15:00',
      read: true,
      important: false,
      category: 'feedback'
    },
    {
      id: 3,
      sender: 'Ana Santos',
      subject: 'Contato comercial',
      content: 'Gostaria de conhecer mais sobre as parcerias...',
      date: '2024-03-18T16:45:00',
      read: true,
      important: true,
      category: 'contact'
    }
  ];

  const filteredMessages = messages.filter(message => {
    const matchesSearch = 
      message.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === 'all' || message.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || 
      (statusFilter === 'read' ? message.read : !message.read);

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getCategoryText = (category: Message['category']) => {
    switch (category) {
      case 'support':
        return 'Suporte';
      case 'contact':
        return 'Contato';
      case 'feedback':
        return 'Feedback';
      default:
        return category;
    }
  };

  const getCategoryColor = (category: Message['category']) => {
    switch (category) {
      case 'support':
        return 'bg-blue-100 text-blue-800';
      case 'contact':
        return 'bg-purple-100 text-purple-800';
      case 'feedback':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6 p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Mensagens</h1>
            <p className="text-gray-600">Gerencie as mensagens recebidas na plataforma</p>
          </div>
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
                placeholder="Remetente, assunto ou conteúdo"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Categoria
              </label>
              <select
                id="category"
                className="w-full rounded-lg border-gray-300 focus:border-green-500 focus:ring-green-500"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="all">Todas</option>
                <option value="support">Suporte</option>
                <option value="contact">Contato</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>

            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                id="status"
                className="w-full rounded-lg border-gray-300 focus:border-green-500 focus:ring-green-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">Todos</option>
                <option value="read">Lidas</option>
                <option value="unread">Não lidas</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Remetente
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Assunto
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Categoria
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Data
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredMessages.map((message) => (
                  <tr key={message.id} className={!message.read ? 'bg-gray-50' : ''}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <FiMail className={`w-5 h-5 ${message.read ? 'text-gray-400' : 'text-blue-500'}`} />
                        {message.important && (
                          <FiStar className="w-5 h-5 text-yellow-400 ml-2" />
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{message.sender}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{message.subject}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getCategoryColor(message.category)}`}>
                        {getCategoryText(message.category)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {new Date(message.date).toLocaleString('pt-BR')}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex gap-3">
                        <button
                          onClick={() => alert(`Visualizar mensagem de ${message.sender}`)}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <FiMessageSquare className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => alert(`Excluir mensagem de ${message.sender}`)}
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

export default MessagesPage; 