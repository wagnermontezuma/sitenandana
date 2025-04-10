import { render, screen, fireEvent } from '@testing-library/react';
import AppointmentsPage from '../appointments';
import { useRouter } from 'next/router';

// Mock do useRouter
jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

describe('AppointmentsPage', () => {
  beforeEach(() => {
    // Configuração do mock do router antes de cada teste
    (useRouter as jest.Mock).mockImplementation(() => ({
      push: jest.fn(),
      pathname: '/admin/appointments'
    }));
  });

  it('deve renderizar o título da página', () => {
    render(<AppointmentsPage />);
    expect(screen.getByText('Gerenciar Consultas')).toBeInTheDocument();
  });

  it('deve filtrar consultas por termo de busca', () => {
    render(<AppointmentsPage />);
    
    const searchInput = screen.getByPlaceholderText('Buscar por paciente ou terapeuta...');
    fireEvent.change(searchInput, { target: { value: 'João' } });

    // Verifica se a consulta do João aparece
    expect(screen.getByText('João Silva')).toBeInTheDocument();
    // Verifica se outras consultas não aparecem
    expect(screen.queryByText('Maria Santos')).not.toBeInTheDocument();
  });

  it('deve filtrar consultas por status', () => {
    render(<AppointmentsPage />);
    
    const statusFilter = screen.getByLabelText('Status:');
    fireEvent.change(statusFilter, { target: { value: 'completed' } });

    // Verifica se apenas consultas concluídas são mostradas
    expect(screen.queryByText('Agendada')).not.toBeInTheDocument();
    expect(screen.getByText('Concluída')).toBeInTheDocument();
  });

  it('deve filtrar consultas por tipo', () => {
    render(<AppointmentsPage />);
    
    const typeFilter = screen.getByLabelText('Tipo:');
    fireEvent.change(typeFilter, { target: { value: 'online' } });

    // Verifica se apenas consultas online são mostradas
    expect(screen.queryByText('Presencial')).not.toBeInTheDocument();
    expect(screen.getByText('Online')).toBeInTheDocument();
  });

  it('deve exibir mensagem quando não houver resultados', () => {
    render(<AppointmentsPage />);
    
    const searchInput = screen.getByPlaceholderText('Buscar por paciente ou terapeuta...');
    fireEvent.change(searchInput, { target: { value: 'Usuário Inexistente' } });

    expect(screen.getByText('Nenhuma consulta encontrada')).toBeInTheDocument();
  });

  it('deve chamar router.push ao clicar em adicionar nova consulta', () => {
    render(<AppointmentsPage />);
    
    const addButton = screen.getByText('Nova Consulta');
    fireEvent.click(addButton);

    expect(useRouter().push).toHaveBeenCalledWith('/admin/appointments/new');
  });
}); 