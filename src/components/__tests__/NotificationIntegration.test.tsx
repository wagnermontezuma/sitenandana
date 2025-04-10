import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { NotificationProvider } from '../../contexts/NotificationContext';
import { Notifications } from '../Notifications';

// Mock do socket.io-client
jest.mock('socket.io-client', () => {
  const mockSocket = {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  };
  return {
    io: jest.fn(() => mockSocket),
  };
});

describe('Integração do Sistema de Notificações', () => {
  beforeEach(() => {
    // Limpa os mocks antes de cada teste
    jest.clearAllMocks();
  });

  it('deve mostrar nova notificação quando recebida via WebSocket', async () => {
    const { io } = require('socket.io-client');
    const mockSocket = io();

    render(
      <NotificationProvider>
        <Notifications />
      </NotificationProvider>
    );

    // Simula o recebimento de uma nova notificação
    const newNotification = {
      id: '1',
      type: 'success',
      title: 'Nova Notificação',
      message: 'Mensagem de teste',
      read: false,
      createdAt: new Date().toISOString(),
    };

    // Dispara o evento de nova notificação
    const socketCallback = mockSocket.on.mock.calls.find(
      ([event]) => event === 'notification'
    )[1];
    socketCallback(newNotification);

    // Verifica se a notificação foi exibida
    const button = screen.getByLabelText('Notificações');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Nova Notificação')).toBeInTheDocument();
      expect(screen.getByText('Mensagem de teste')).toBeInTheDocument();
    });
  });

  it('deve atualizar contador quando marcar notificação como lida', async () => {
    render(
      <NotificationProvider>
        <Notifications />
      </NotificationProvider>
    );

    // Simula o recebimento de duas notificações
    const { io } = require('socket.io-client');
    const mockSocket = io();
    const socketCallback = mockSocket.on.mock.calls.find(
      ([event]) => event === 'notification'
    )[1];

    socketCallback({
      id: '1',
      type: 'success',
      title: 'Primeira Notificação',
      message: 'Mensagem 1',
      read: false,
      createdAt: new Date().toISOString(),
    });

    socketCallback({
      id: '2',
      type: 'info',
      title: 'Segunda Notificação',
      message: 'Mensagem 2',
      read: false,
      createdAt: new Date().toISOString(),
    });

    // Abre o painel de notificações
    const button = screen.getByLabelText('Notificações');
    expect(screen.getByText('2')).toBeInTheDocument(); // Contador inicial
    fireEvent.click(button);

    // Marca primeira notificação como lida
    const markAsReadButton = screen.getAllByLabelText('Marcar como lida')[0];
    fireEvent.click(markAsReadButton);

    // Verifica se o contador foi atualizado
    await waitFor(() => {
      expect(screen.getByText('1')).toBeInTheDocument();
    });
  });

  it('deve limpar todas as notificações quando clicar em marcar todas como lidas', async () => {
    render(
      <NotificationProvider>
        <Notifications />
      </NotificationProvider>
    );

    // Simula o recebimento de notificações
    const { io } = require('socket.io-client');
    const mockSocket = io();
    const socketCallback = mockSocket.on.mock.calls.find(
      ([event]) => event === 'notification'
    )[1];

    socketCallback({
      id: '1',
      type: 'success',
      title: 'Notificação 1',
      message: 'Mensagem 1',
      read: false,
      createdAt: new Date().toISOString(),
    });

    socketCallback({
      id: '2',
      type: 'info',
      title: 'Notificação 2',
      message: 'Mensagem 2',
      read: false,
      createdAt: new Date().toISOString(),
    });

    // Abre o painel e marca todas como lidas
    const button = screen.getByLabelText('Notificações');
    fireEvent.click(button);
    
    const markAllButton = screen.getByText('Marcar todas como lidas');
    fireEvent.click(markAllButton);

    // Verifica se o contador foi zerado
    await waitFor(() => {
      expect(screen.queryByText('2')).not.toBeInTheDocument();
    });
  });
}); 