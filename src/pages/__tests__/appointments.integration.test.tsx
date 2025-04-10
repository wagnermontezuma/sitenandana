import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AppointmentsPage from '../admin/appointments';

// Mock do useRouter
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Integração da Página de Consultas', () => {
  beforeEach(() => {
    // Limpa os mocks antes de cada teste
    jest.clearAllMocks();
  });

  it('deve filtrar consultas por status', async () => {
    render(<AppointmentsPage />);

    // Seleciona filtro de status "Agendada"
    const statusFilter = screen.getByLabelText('Filtrar por status');
    await userEvent.selectOptions(statusFilter, 'scheduled');

    // Verifica se apenas consultas agendadas são exibidas
    const appointments = screen.getAllByRole('row');
    appointments.slice(1).forEach(appointment => {
      expect(appointment).toHaveTextContent('Agendada');
    });
  });

  it('deve filtrar consultas por tipo', async () => {
    render(<AppointmentsPage />);

    // Seleciona filtro de tipo "Online"
    const typeFilter = screen.getByLabelText('Filtrar por tipo');
    await userEvent.selectOptions(typeFilter, 'online');

    // Verifica se apenas consultas online são exibidas
    const appointments = screen.getAllByRole('row');
    appointments.slice(1).forEach(appointment => {
      expect(appointment).toHaveTextContent('Online');
    });
  });

  it('deve buscar consultas por nome do paciente', async () => {
    render(<AppointmentsPage />);

    // Digita nome do paciente no campo de busca
    const searchInput = screen.getByPlaceholderText('Buscar por paciente ou terapeuta');
    await userEvent.type(searchInput, 'João Silva');

    // Verifica se apenas consultas do paciente são exibidas
    await waitFor(() => {
      const appointments = screen.getAllByRole('row');
      appointments.slice(1).forEach(appointment => {
        expect(appointment).toHaveTextContent('João Silva');
      });
    });
  });

  it('deve permitir cancelar uma consulta', async () => {
    render(<AppointmentsPage />);

    // Clica no botão de cancelar da primeira consulta
    const cancelButton = screen.getAllByLabelText('Cancelar consulta')[0];
    fireEvent.click(cancelButton);

    // Confirma o cancelamento
    const confirmButton = screen.getByText('Confirmar');
    fireEvent.click(confirmButton);

    // Verifica se a consulta foi marcada como cancelada
    await waitFor(() => {
      const appointment = screen.getAllByRole('row')[1];
      expect(appointment).toHaveTextContent('Cancelada');
    });
  });

  it('deve exibir detalhes da consulta ao clicar em editar', async () => {
    render(<AppointmentsPage />);

    // Clica no botão de editar da primeira consulta
    const editButton = screen.getAllByLabelText('Editar consulta')[0];
    fireEvent.click(editButton);

    // Verifica se os detalhes são exibidos
    await waitFor(() => {
      expect(screen.getByText('Detalhes da Consulta')).toBeInTheDocument();
      expect(screen.getByLabelText('Paciente')).toBeInTheDocument();
      expect(screen.getByLabelText('Terapeuta')).toBeInTheDocument();
      expect(screen.getByLabelText('Data')).toBeInTheDocument();
      expect(screen.getByLabelText('Horário')).toBeInTheDocument();
    });
  });
}); 