import { render, screen, fireEvent } from '@testing-library/react';
import { NotificationBell } from '../NotificationBell';
import { NotificationProvider } from '@/contexts/NotificationContext';

// Mock do contexto de notificações
jest.mock('@/contexts/NotificationContext', () => ({
  useNotifications: () => ({
    notifications: [
      {
        id: '1',
        type: 'info',
        title: 'Nova mensagem',
        message: 'Você recebeu uma nova mensagem',
        read: false,
        createdAt: new Date('2024-03-20T10:00:00'),
      },
      {
        id: '2',
        type: 'success',
        title: 'Consulta agendada',
        message: 'Sua consulta foi agendada com sucesso',
        read: true,
        createdAt: new Date('2024-03-19T15:30:00'),
      },
    ],
    markAsRead: jest.fn(),
    markAllAsRead: jest.fn(),
    clearNotifications: jest.fn(),
  }),
  NotificationProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('NotificationBell', () => {
  it('deve renderizar o sino de notificações', () => {
    render(<NotificationBell />);
    expect(screen.getByLabelText('Notificações')).toBeInTheDocument();
  });

  it('deve mostrar o contador de notificações não lidas', () => {
    render(<NotificationBell />);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('deve abrir o dropdown ao clicar no sino', () => {
    render(<NotificationBell />);
    fireEvent.click(screen.getByLabelText('Notificações'));
    expect(screen.getByText('Nova mensagem')).toBeInTheDocument();
  });

  it('deve chamar markAsRead ao clicar em uma notificação', () => {
    const { useNotifications } = jest.requireMock('@/contexts/NotificationContext');
    render(<NotificationBell />);
    
    fireEvent.click(screen.getByLabelText('Notificações'));
    fireEvent.click(screen.getByText('Nova mensagem'));
    
    expect(useNotifications().markAsRead).toHaveBeenCalledWith('1');
  });

  it('deve chamar markAllAsRead ao clicar em "Marcar todas como lidas"', () => {
    const { useNotifications } = jest.requireMock('@/contexts/NotificationContext');
    render(<NotificationBell />);
    
    fireEvent.click(screen.getByLabelText('Notificações'));
    fireEvent.click(screen.getByText('Marcar todas como lidas'));
    
    expect(useNotifications().markAllAsRead).toHaveBeenCalled();
  });

  it('deve chamar clearNotifications ao clicar em "Limpar"', () => {
    const { useNotifications } = jest.requireMock('@/contexts/NotificationContext');
    render(<NotificationBell />);
    
    fireEvent.click(screen.getByLabelText('Notificações'));
    fireEvent.click(screen.getByText('Limpar'));
    
    expect(useNotifications().clearNotifications).toHaveBeenCalled();
  });
}); 