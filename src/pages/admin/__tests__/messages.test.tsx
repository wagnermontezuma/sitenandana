import { render, screen, fireEvent } from '@testing-library/react';
import MessagesPage from '../messages';

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('MessagesPage', () => {
  it('renderiza o título e filtros', () => {
    render(<MessagesPage />);
    
    expect(screen.getByText('Mensagens')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Buscar por remetente, assunto ou conteúdo...')).toBeInTheDocument();
    expect(screen.getByLabelText('Categoria:')).toBeInTheDocument();
    expect(screen.getByLabelText('Status:')).toBeInTheDocument();
  });

  it('filtra mensagens por termo de busca', () => {
    render(<MessagesPage />);
    
    const searchInput = screen.getByPlaceholderText('Buscar por remetente, assunto ou conteúdo...');
    fireEvent.change(searchInput, { target: { value: 'suporte' } });
    
    expect(screen.getByText('Dúvida sobre agendamento')).toBeInTheDocument();
    expect(screen.queryByText('Feedback da consulta')).not.toBeInTheDocument();
  });

  it('filtra mensagens por categoria', () => {
    render(<MessagesPage />);
    
    const categorySelect = screen.getByLabelText('Categoria:');
    fireEvent.change(categorySelect, { target: { value: 'support' } });
    
    expect(screen.getAllByText('Suporte')).toHaveLength(1);
    expect(screen.queryByText('Feedback')).not.toBeInTheDocument();
  });

  it('filtra mensagens por status de leitura', () => {
    render(<MessagesPage />);
    
    const statusSelect = screen.getByLabelText('Status:');
    fireEvent.change(statusSelect, { target: { value: 'unread' } });
    
    const unreadMessages = screen.getAllByTestId('unread-message');
    expect(unreadMessages.length).toBeGreaterThan(0);
    expect(screen.queryByTestId('read-message')).not.toBeInTheDocument();
  });

  it('permite visualizar uma mensagem', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    render(<MessagesPage />);
    
    const viewButton = screen.getAllByText('Visualizar')[0];
    fireEvent.click(viewButton);
    
    expect(alertMock).toHaveBeenCalled();
    alertMock.mockRestore();
  });

  it('permite excluir uma mensagem', () => {
    const confirmMock = jest.spyOn(window, 'confirm').mockImplementation(() => true);
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    render(<MessagesPage />);
    
    const deleteButton = screen.getAllByText('Excluir')[0];
    fireEvent.click(deleteButton);
    
    expect(confirmMock).toHaveBeenCalledWith('Tem certeza que deseja excluir esta mensagem?');
    expect(alertMock).toHaveBeenCalledWith('Mensagem excluída com sucesso!');
    
    confirmMock.mockRestore();
    alertMock.mockRestore();
  });

  it('marca mensagem como lida ao visualizar', () => {
    render(<MessagesPage />);
    
    const unreadMessage = screen.getAllByTestId('unread-message')[0];
    const viewButton = unreadMessage.querySelector('button');
    
    if (!viewButton) throw new Error('Botão de visualização não encontrado');
    
    fireEvent.click(viewButton as HTMLButtonElement);
    
    expect(screen.queryByTestId('unread-message')).not.toBeInTheDocument();
  });
}); 