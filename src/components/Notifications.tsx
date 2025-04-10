import React, { useState } from 'react';
import { FiBell, FiCheck, FiTrash2, FiX } from 'react-icons/fi';
import { useNotifications } from '../contexts/NotificationContext';

/**
 * Interface que define a estrutura de uma notificação
 * @interface Notification
 */
interface Notification {
  /** Identificador único da notificação */
  id: string;
  /** Tipo da notificação: 'success' | 'error' | 'warning' | 'info' */
  type: string;
  /** Título da notificação */
  title: string;
  /** Mensagem detalhada da notificação */
  message: string;
  /** Indica se a notificação foi lida */
  read: boolean;
  /** Data de criação da notificação */
  createdAt: string;
}

/**
 * Componente de notificações que exibe um ícone com contador e um painel de notificações
 * @component
 * @example
 * ```tsx
 * <Notifications />
 * ```
 */
export function Notifications() {
  /** Estado que controla a visibilidade do painel de notificações */
  const [isOpen, setIsOpen] = useState(false);
  
  /** Hook que fornece acesso ao contexto de notificações */
  const { 
    notifications, 
    unreadCount, 
    markAsRead, 
    markAllAsRead, 
    clearNotification 
  } = useNotifications();

  /**
   * Determina a cor de fundo e borda baseado no tipo da notificação
   * @param {string} type - Tipo da notificação
   * @returns {string} Classes do Tailwind CSS para estilização
   */
  const getNotificationColor = (type: string): string => {
    switch (type) {
      case 'success':
        return 'bg-green-100 border-green-500 text-green-700';
      case 'error':
        return 'bg-red-100 border-red-500 text-red-700';
      case 'warning':
        return 'bg-yellow-100 border-yellow-500 text-yellow-700';
      default:
        return 'bg-blue-100 border-blue-500 text-blue-700';
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
        aria-label="Notificações"
      >
        <FiBell className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 w-96 mt-2 bg-white rounded-lg shadow-xl z-50">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Notificações</h3>
              {notifications.length > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-sm text-blue-600 hover:text-blue-800"
                  aria-label="Marcar todas como lidas"
                >
                  Marcar todas como lidas
                </button>
              )}
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <p className="p-4 text-center text-gray-500">
                Nenhuma notificação
              </p>
            ) : (
              <ul className="divide-y divide-gray-200">
                {notifications.map((notification) => (
                  <li
                    key={notification.id}
                    className={`p-4 ${!notification.read ? 'bg-gray-50' : ''}`}
                  >
                    <div className={`flex items-start border-l-4 p-3 ${getNotificationColor(notification.type)}`}>
                      <div className="flex-1">
                        <p className="font-semibold">{notification.title}</p>
                        <p className="text-sm mt-1">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(notification.createdAt).toLocaleString('pt-BR')}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        {!notification.read && (
                          <button
                            onClick={() => markAsRead(notification.id)}
                            className="text-blue-600 hover:text-blue-800"
                            aria-label="Marcar como lida"
                          >
                            <FiCheck className="w-4 h-4" />
                          </button>
                        )}
                        <button
                          onClick={() => clearNotification(notification.id)}
                          className="text-red-600 hover:text-red-800"
                          aria-label="Remover notificação"
                        >
                          <FiTrash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            aria-label="Fechar notificações"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
} 