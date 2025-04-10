import { render, screen, fireEvent } from '@testing-library/react';
import SettingsPage from '../settings';

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('SettingsPage', () => {
  it('renderiza todos os campos do formulário', () => {
    render(<SettingsPage />);
    
    expect(screen.getByLabelText('Nome do Site')).toBeInTheDocument();
    expect(screen.getByLabelText('Descrição')).toBeInTheDocument();
    expect(screen.getByLabelText('Email de Contato')).toBeInTheDocument();
    expect(screen.getByLabelText('Telefone de Suporte')).toBeInTheDocument();
    expect(screen.getByLabelText('Endereço')).toBeInTheDocument();
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument();
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument();
  });

  it('atualiza valores dos campos ao digitar', () => {
    render(<SettingsPage />);
    
    const siteNameInput = screen.getByLabelText('Nome do Site');
    fireEvent.change(siteNameInput, { target: { value: 'Novo Nome' } });
    expect(siteNameInput).toHaveValue('Novo Nome');

    const emailInput = screen.getByLabelText('Email de Contato');
    fireEvent.change(emailInput, { target: { value: 'novo@email.com' } });
    expect(emailInput).toHaveValue('novo@email.com');
  });

  it('exibe mensagem de sucesso ao salvar configurações', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<SettingsPage />);
    
    const submitButton = screen.getByRole('button', { name: /salvar/i });
    fireEvent.click(submitButton);
    
    expect(alertMock).toHaveBeenCalledWith('Configurações salvas com sucesso!');
    alertMock.mockRestore();
  });

  it('valida campos obrigatórios antes de submeter', () => {
    render(<SettingsPage />);
    
    const siteNameInput = screen.getByLabelText('Nome do Site');
    const emailInput = screen.getByLabelText('Email de Contato');
    
    fireEvent.change(siteNameInput, { target: { value: '' } });
    fireEvent.change(emailInput, { target: { value: '' } });
    
    const submitButton = screen.getByRole('button', { name: /salvar/i });
    fireEvent.click(submitButton);
    
    expect(screen.getByText('Nome do site é obrigatório')).toBeInTheDocument();
    expect(screen.getByText('Email de contato é obrigatório')).toBeInTheDocument();
  });

  it('atualiza preferências de notificação', () => {
    render(<SettingsPage />);
    
    const emailNotifCheckbox = screen.getByRole('checkbox', { name: /notificações por email/i });
    const smsNotifCheckbox = screen.getByRole('checkbox', { name: /notificações por sms/i });
    
    fireEvent.click(emailNotifCheckbox);
    fireEvent.click(smsNotifCheckbox);
    
    expect(emailNotifCheckbox).toBeChecked();
    expect(smsNotifCheckbox).toBeChecked();
  });
}); 