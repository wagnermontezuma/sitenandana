import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Socket, io as socketIO } from 'socket.io-client';
import { useAuth } from './AuthContext';

export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
}

interface NotificationContextType {
  notifications: Notification[];
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  clearNotification: (id: string) => void;
  clearNotifications: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

interface NotificationProviderProps {
  children: ReactNode;
}

export function NotificationProvider({ children }: NotificationProviderProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      // Conecta ao WebSocket apenas se houver um usuário autenticado
      const socketInstance = socketIO(process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:3001', {
        auth: {
          token: user.id
        }
      });

      socketInstance.on('connect', () => {
        console.log('Conectado ao servidor de notificações');
      });

      socketInstance.on('notification', (notification: Notification) => {
        setNotifications(prev => [notification, ...prev]);
      });

      socketInstance.on('disconnect', () => {
        console.log('Desconectado do servidor de notificações');
      });

      setSocket(socketInstance);

      return () => {
        socketInstance.disconnect();
      };
    }
  }, [user]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
    socket?.emit('markAsRead', id);
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    );
    socket?.emit('markAllAsRead');
  };

  const clearNotification = (id: string) => {
    setNotifications(prev =>
      prev.filter(notification => notification.id !== id)
    );
    socket?.emit('clearNotification', id);
  };

  const clearNotifications = () => {
    setNotifications([]);
    socket?.emit('clearNotifications');
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        markAsRead,
        markAllAsRead,
        clearNotification,
        clearNotifications
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications deve ser usado dentro de um NotificationProvider');
  }
  return context;
} 