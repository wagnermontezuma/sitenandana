import { render, screen, fireEvent } from '@testing-library/react';
import PricingPlans from '../PricingPlans';

describe('PricingPlans', () => {
  const mockOnPlanClick = jest.fn();

  beforeEach(() => {
    mockOnPlanClick.mockClear();
  });

  it('renderiza todos os planos corretamente', () => {
    render(<PricingPlans onPlanClick={mockOnPlanClick} />);

    // Verifica se os nomes dos planos estão presentes
    expect(screen.getByText('Básico')).toBeInTheDocument();
    expect(screen.getByText('Profissional')).toBeInTheDocument();
    expect(screen.getByText('Empresarial')).toBeInTheDocument();

    // Verifica se os preços estão presentes
    expect(screen.getByText('R$99')).toBeInTheDocument();
    expect(screen.getByText('R$199')).toBeInTheDocument();
    expect(screen.getByText('R$399')).toBeInTheDocument();

    // Verifica se algumas features estão presentes
    expect(screen.getByText('Até 4 consultas por mês')).toBeInTheDocument();
    expect(screen.getByText('Chat prioritário com terapeuta')).toBeInTheDocument();
    expect(screen.getByText('API dedicada')).toBeInTheDocument();
  });

  it('marca o plano Profissional como popular', () => {
    render(<PricingPlans onPlanClick={mockOnPlanClick} />);
    expect(screen.getByText('Popular')).toBeInTheDocument();
  });

  it('chama onPlanClick quando um plano é clicado', () => {
    render(<PricingPlans onPlanClick={mockOnPlanClick} />);
    
    // Clica no plano básico
    const basicPlan = screen.getByText('Básico').closest('div');
    fireEvent.click(basicPlan!);

    expect(mockOnPlanClick).toHaveBeenCalledTimes(1);
    expect(mockOnPlanClick).toHaveBeenCalledWith(expect.objectContaining({
      id: 'basic',
      name: 'Básico',
      price: 99
    }));
  });

  it('renderiza os botões de "Começar agora" para cada plano', () => {
    render(<PricingPlans onPlanClick={mockOnPlanClick} />);
    
    const buttons = screen.getAllByText('Começar agora');
    expect(buttons).toHaveLength(3);
  });
}); 