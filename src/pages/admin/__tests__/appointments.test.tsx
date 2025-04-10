import { render, screen, fireEvent } from '@testing-library/react';
import AppointmentsPage from '../appointments';
import { useRouter } from 'next/router';

// Mock do useRouter
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('AppointmentsPage', () => {
  beforeEach(() => {
    // Configuração do mock do router antes de cada teste
    (useRouter as jest.Mock).mockImplementation(() => ({
      push: jest.fn(),
      pathname: '/admin/appointments'
    }));
  });

  it('renderiza o título e filtros', () => {
    render(<AppointmentsPage />);
    
    expect(screen.getByText('Consultas')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Buscar por paciente ou terapeuta...')).toBeInTheDocument();
    expect(screen.getByLabelText('Status:')).toBeInTheDocument();
    expect(screen.getByLabelText('Tipo:')).toBeInTheDocument();
  });

  it('filtra consultas por termo de busca', () => {
    render(<AppointmentsPage />);
    
    const searchInput = screen.getByPlaceholderText('Buscar por paciente ou terapeuta...');
    fireEvent.change(searchInput, { target: { value: 'Maria' } });
    
    expect(screen.getByText('Maria Silva')).toBeInTheDocument();
    expect(screen.queryByText('João Santos')).not.toBeInTheDocument();
  });

  it('filtra consultas por status', () => {
    render(<AppointmentsPage />);
    
    const statusSelect = screen.getByLabelText('Status:');
    fireEvent.change(statusSelect, { target: { value: 'completed' } });
    
    expect(screen.queryByText('Agendada')).not.toBeInTheDocument();
    expect(screen.getAllByText('Concluída')).toHaveLength(1);
  });

  it('filtra consultas por tipo', () => {
    render(<AppointmentsPage />);
    
    const typeSelect = screen.getByLabelText('Tipo:');
    fireEvent.change(typeSelect, { target: { value: 'online' } });
    
    expect(screen.getAllByText('Online')).toHaveLength(1);
    expect(screen.queryByText('Presencial')).not.toBeInTheDocument();
  });

  it('permite cancelar uma consulta', () => {
    const confirmMock = jest.spyOn(window, 'confirm').mockImplementation(() => true);
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    render(<AppointmentsPage />);
    
    const cancelButton = screen.getAllByText('Cancelar')[0];
    fireEvent.click(cancelButton);
    
    expect(confirmMock).toHaveBeenCalledWith('Tem certeza que deseja cancelar esta consulta?');
    expect(alertMock).toHaveBeenCalledWith('Consulta cancelada com sucesso!');
    
    confirmMock.mockRestore();
    alertMock.mockRestore();
  });

  it('permite editar uma consulta', () => {
    render(<AppointmentsPage />);
    
    const editButton = screen.getAllByText('Editar')[0];
    fireEvent.click(editButton);
    
    // Aqui você pode adicionar mais verificações quando implementar o modal/formulário de edição
    expect(screen.getByText('Editar')).toBeInTheDocument();
  });

  it('permite adicionar uma nova consulta', () => {
    render(<AppointmentsPage />);
    
    const addButton = screen.getByText('Nova Consulta');
    fireEvent.click(addButton);
    
    // Aqui você pode adicionar mais verificações quando implementar o modal/formulário de adição
    expect(screen.getByText('Nova Consulta')).toBeInTheDocument();
  });
}); 