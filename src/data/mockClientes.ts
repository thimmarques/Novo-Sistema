import { Cliente } from '@/types/cliente';

export const MOCK_CLIENTES: Cliente[] = [
  {
    id: 'cli-001',
    type: 'pf',
    practice_area: 'trabalhista',
    responsible_id: 'user-002',
    status: 'ativo',
    is_vip: false,
    created_at: '2025-08-10',
    updated_at: '2025-08-10',
    created_by: 'user-001',
    nome: 'João Silva Santos',
    cpf: '321.654.987-00',
    email: 'joao.santos@email.com',
    telefone: '(11) 98765-4321',
    logradouro: 'Rua das Flores, 123',
    cidade: 'São Paulo',
    estado: 'SP',
    observacoes: 'Cliente encaminhado pelo sindicato',
    metadata: {
      rg: '12.345.678-9',
      nascimento: '1985-03-22',
      estado_civil: 'casado',
      polo: 'reclamante',
      ctps: '123456 / 001-SP',
      cargo: 'Auxiliar Administrativo',
      salario: 2800,
      data_admissao: '2019-05-10',
      data_demissao: '2026-01-15',
      tipo_demissao: 'sem_justa_causa',
      empresa_reclamada: 'Grupo Comercial Paulista Ltda',
      sindicato: 'SEAC-SP',
    }
  },
  {
    id: 'cli-002',
    type: 'pj',
    practice_area: 'trabalhista',
    responsible_id: 'user-002',
    status: 'ativo',
    is_vip: true,
    created_at: '2024-11-03',
    updated_at: '2024-11-03',
    created_by: 'user-001',
    nome: 'Construtora Betel S.A.',
    cnpj: '98.765.432/0001-10',
    email: 'juridico@construtorabeltel.com.br',
    telefone: '(11) 3344-5566',
    logradouro: 'Av. Paulista, 1000',
    cidade: 'São Paulo',
    estado: 'SP',
    observacoes: 'Empresa com histórico de reclamações trabalhistas',
    metadata: {
      razao_social: 'Construtora Betel S.A.',
    }
  },
  {
    id: 'cli-003',
    type: 'pj',
    practice_area: 'civil',
    responsible_id: 'user-003',
    status: 'ativo',
    is_vip: true,
    created_at: '2024-06-18',
    updated_at: '2024-06-18',
    created_by: 'user-001',
    nome: 'Martins & Associados Ltda',
    cnpj: '12.345.678/0001-90',
    email: 'paulo@martinsassociados.com.br',
    telefone: '(11) 97654-3210',
    logradouro: 'Rua Augusta, 500',
    cidade: 'São Paulo',
    estado: 'SP',
    observacoes: 'Disputa societária em andamento',
    metadata: {
      razao_social: 'Martins & Associados Ltda',
    }
  },
  {
    id: 'cli-004',
    type: 'pf',
    practice_area: 'criminal',
    responsible_id: 'user-004',
    status: 'ativo',
    is_vip: false,
    created_at: '2025-10-05',
    updated_at: '2025-10-05',
    created_by: 'user-001',
    nome: 'Pedro Henrique Gomes',
    cpf: '456.789.123-00',
    email: 'pedro.gomes@email.com',
    telefone: '(11) 91234-5678',
    logradouro: 'Rua Voluntários da Pátria, 77',
    cidade: 'São Paulo',
    estado: 'SP',
    observacoes: 'Preso em flagrante, solto com liberdade provisória',
    metadata: {
      polo: 'réu',
    }
  },
  {
    id: 'cli-005',
    type: 'pf',
    practice_area: 'previdenciario',
    responsible_id: 'user-005',
    status: 'ativo',
    is_vip: false,
    created_at: '2025-08-20',
    updated_at: '2025-08-20',
    created_by: 'user-001',
    nome: 'Maria de Fátima Oliveira',
    cpf: '789.123.456-00',
    email: 'mariafatima@email.com',
    telefone: '(11) 94567-8901',
    logradouro: 'Rua Dom Pedro II, 45',
    cidade: 'São Bernardo do Campo',
    estado: 'SP',
    observacoes: 'CNIS disponível. Perícia agendada para março/2026',
    metadata: {
      pericia_medica: 'agendada_marco_2026',
    }
  },
];

const WHP_CLIENTES_KEY = 'whp_clientes';

export function loadClientes(): Cliente[] {
  const stored = localStorage.getItem(WHP_CLIENTES_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      // fall through
    }
  }
  localStorage.setItem(WHP_CLIENTES_KEY, JSON.stringify(MOCK_CLIENTES));
  return [...MOCK_CLIENTES];
}

export function saveClientes(clientes: Cliente[]): void {
  localStorage.setItem(WHP_CLIENTES_KEY, JSON.stringify(clientes));
}
