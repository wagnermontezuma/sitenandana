import { render, act } from '@testing-library/react';
import { NotificationProvider, useNotifications } from '../NotificationContext';
import { Socket } from 'socket.io-client';

// Mock do socket.io-client
jest.mock('socket.io-client', () => {
  const mockSocket = {
    on: jest.fn(),
    emit: jest.fn(),
    disconnect: jest.fn(),
  };
  return {
    io: jest.fn(() => mockSocket),
  };
});

// Componente de teste para acessar o contexto
const TestComponent = () => {
  const { notifications, markAsRead, markAllAsRead, clearNotifications } = useNotifications();
  return (
    <div>
      <span data-testid="notification-count">{notifications.length}</span>
      <button onClick={() => markAsRead('1')} data-testid="mark-read">
        Mark as Read
      </button>
      <button onClick={markAllAsRead} data-testid="mark-all-read">
        Mark All as Read
      </button>
      <button onClick={clearNotifications} data-testid="clear">
        Clear
      </button>
    </div>
  );
};

describe('NotificationContext', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve inicializar o provider corretamente', () => {
    render(
      <NotificationProvider>
        <TestComponent />
      </NotificationProvider>
    );
  });

  it('deve adicionar novas notificações quando receber eventos do socket', () => {
    const { getByTestId } = render(
      <NotificationProvider>
        <TestComponent />
      </NotificationProvider>
    );

    const mockNotification = {
      id: '1',
      type: 'info',
      title: 'Test',
      message: 'Test message',
      read: false,
      createdAt: new Date(),
    };

    // Simula o recebimento de uma notificação
    act(() => {
      const socket = require('socket.io-client').io();
      const [eventName, callback] = socket.on.mock.calls[0];
      expect(eventName).toBe('notification');
      callback(mockNotification);
    });

    expect(getByTestId('notification-count').textContent).toBe('1');
  });

  it('deve marcar uma notificação como lida', () => {
    const { getByTestId } = render(
      <NotificationProvider>
        <TestComponent />
      </NotificationProvider>
    );

    // Adiciona uma notificação
    act(() => {
      const socket = require('socket.io-client').io();
      const [eventName, callback] = socket.on.mock.calls[0];
      callback({
        id: '1',
        type: 'info',
        title: 'Test',
        message: 'Test message',
        read: false,
        createdAt: new Date(),
      });
    });

    // Marca como lida
    act(() => {
      getByTestId('mark-read').click();
    });

    const socket = require('socket.io-client').io();
    expect(socket.emit).toHaveBeenCalledWith('markAsRead', '1');
  });

  it('deve marcar todas as notificações como lidas', () => {
    const { getByTestId } = render(
      <NotificationProvider>
        <TestComponent />
      </NotificationProvider>
    );

    // Adiciona notificações
    act(() => {
      const socket = require('socket.io-client').io();
      const [eventName, callback] = socket.on.mock.calls[0];
      callback({
        id: '1',
        type: 'info',
        title: 'Test 1',
        message: 'Test message 1',
        read: false,
        createdAt: new Date(),
      });
      callback({
        id: '2',
        type: 'info',
        title: 'Test 2',
        message: 'Test message 2',
        read: false,
        createdAt: new Date(),
      });
    });

    // Marca todas como lidas
    act(() => {
      getByTestId('mark-all-read').click();
    });

    const socket = require('socket.io-client').io();
    expect(socket.emit).toHaveBeenCalledWith('markAllAsRead');
  });

  it('deve limpar todas as notificações', () => {
    const { getByTestId } = render(
      <NotificationProvider>
        <TestComponent />
      </NotificationProvider>
    );

    // Adiciona notificações
    act(() => {
      const socket = require('socket.io-client').io();
      const [eventName, callback] = socket.on.mock.calls[0];
      callback({
        id: '1',
        type: 'info',
        title: 'Test',
        message: 'Test message',
        read: false,
        createdAt: new Date(),
      });
    });

    // Limpa as notificações
    act(() => {
      getByTestId('clear').click();
    });

    const socket = require('socket.io-client').io();
    expect(socket.emit).toHaveBeenCalledWith('clearNotifications');
    expect(getByTestId('notification-count').textContent).toBe('0');
  });

  it('deve desconectar o socket ao desmontar', () => {
    const { unmount } = render(
      <NotificationProvider>
        <TestComponent />
      </NotificationProvider>
    );

    unmount();

    const socket = require('socket.io-client').io();
    expect(socket.disconnect).toHaveBeenCalled();
  });
}); 