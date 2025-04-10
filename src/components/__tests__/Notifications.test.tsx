import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Notifications } from '../Notifications';
import { NotificationProvider } from '../../contexts/NotificationContext';

// Mock do contexto de notificações
const mockNotifications = [
  {
    id: '1',
    type: 'success',
    title: 'Sucesso',
    message: 'Operação realizada com sucesso',
    read: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    type: 'error',
    title: 'Erro',
    message: 'Algo deu errado',
    read: true,
    createdAt: new Date().toISOString(),
  },
];

const mockContextValue = {
  notifications: mockNotifications,
  unreadCount: 1,
  markAsRead: jest.fn(),
  markAllAsRead: jest.fn(),
  clearNotification: jest.fn(),
};

jest.mock('../../contexts/NotificationContext', () => ({
  useNotifications: () => mockContextValue,
}));

describe('Componente Notifications', () => {
  it('deve renderizar o botão de notificações com contador', () => {
    render(<Notifications />);
    
    const button = screen.getByLabelText('Notificações');
    expect(button).toBeInTheDocument();
    
    const counter = screen.getByText('1');
    expect(counter).toBeInTheDocument();
  });

  it('deve abrir o painel de notificações ao clicar no botão', () => {
    render(<Notifications />);
    
    const button = screen.getByLabelText('Notificações');
    fireEvent.click(button);
    
    expect(screen.getByText('Sucesso')).toBeInTheDocument();
    expect(screen.getByText('Erro')).toBeInTheDocument();
  });

  it('deve chamar markAsRead ao clicar no botão de marcar como lida', () => {
    render(<Notifications />);
    
    const button = screen.getByLabelText('Notificações');
    fireEvent.click(button);
    
    const markAsReadButton = screen.getByLabelText('Marcar como lida');
    fireEvent.click(markAsReadButton);
    
    expect(mockContextValue.markAsRead).toHaveBeenCalledWith('1');
  });

  it('deve chamar markAllAsRead ao clicar no botão de marcar todas como lidas', () => {
    render(<Notifications />);
    
    const button = screen.getByLabelText('Notificações');
    fireEvent.click(button);
    
    const markAllButton = screen.getByText('Marcar todas como lidas');
    fireEvent.click(markAllButton);
    
    expect(mockContextValue.markAllAsRead).toHaveBeenCalled();
  });

  it('deve chamar clearNotification ao clicar no botão de remover', () => {
    render(<Notifications />);
    
    const button = screen.getByLabelText('Notificações');
    fireEvent.click(button);
    
    const removeButtons = screen.getAllByLabelText('Remover notificação');
    fireEvent.click(removeButtons[0]);
    
    expect(mockContextValue.clearNotification).toHaveBeenCalledWith('1');
  });

  it('deve mostrar mensagem quando não há notificações', () => {
    mockContextValue.notifications = [];
    render(<Notifications />);
    
    const button = screen.getByLabelText('Notificações');
    fireEvent.click(button);
    
    expect(screen.getByText('Nenhuma notificação')).toBeInTheDocument();
  });
}); 