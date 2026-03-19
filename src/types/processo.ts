export type ProcessoStatus =
  | 'ativo'
  | 'audiencia'
  | 'pendente'
  | 'encerrado'
  | 'recurso'
  | 'acordo';

export type TribunalType =
  | 'TJSP'
  | 'TRT-2'
  | 'TRF-3'
  | 'JEF/INSS'
  | 'JTSP'
  | 'STJ'
  | 'STF';

export type FaseType =
  | 'peticao_inicial'
  | 'citacao'
  | 'instrucao'
  | 'sentenca'
  | 'recurso'
  | 'execucao'
  | 'arquivado';

export interface Processo {
  id: string
  polo_ativo_id: string
  polo_ativo?: {
    nome: string
    practice_area: string
  }
  practice_area: 'criminal' | 'trabalhista' | 'civil' | 'previdenciario'
  fase: 'conhecimento' | 'execucao' | 'recurso' | 'inquerito' | 'instrucao'
  status: ProcessoStatus
  numero_cnj?: string
  tribunal?: string
  vara?: string
  comarca?: string
  valor_causa?: number
  proxima_audiencia?: string
  prazo_fatal?: string
  notes?: string
  responsible_id: string
  created_at: string
  created_by: string
}

export const statusLabels: Record<ProcessoStatus, string> = {
  ativo: 'Ativo',
  audiencia: 'Em Audiência',
  pendente: 'Pendente',
  encerrado: 'Encerrado',
  recurso: 'Em Recurso',
  acordo: 'Acordo',
};

export const statusColors: Record<ProcessoStatus, string> = {
  ativo: 'bg-badge-ativo text-badge-ativo-fg',
  audiencia: 'bg-badge-audiencia text-badge-audiencia-fg',
  pendente: 'bg-badge-pendente text-badge-pendente-fg',
  encerrado: 'bg-badge-encerrado text-badge-encerrado-fg',
  recurso: 'bg-badge-recurso text-badge-recurso-fg',
  acordo: 'bg-teal-100 text-teal-700',
};

export const faseLabels: Record<FaseType, string> = {
  peticao_inicial: 'Petição Inicial',
  citacao: 'Citação',
  instrucao: 'Instrução',
  sentenca: 'Sentença',
  recurso: 'Recurso',
  execucao: 'Execução',
  arquivado: 'Arquivado',
};

export const areaColors: Record<string, string> = {
  trabalhista: 'bg-badge-trabalhista text-badge-trabalhista-fg',
  civil: 'bg-badge-civil text-badge-civil-fg',
  criminal: 'bg-badge-criminal text-badge-criminal-fg',
  previdenciario: 'bg-badge-previdenciario text-badge-previdenciario-fg',
};

export const areaLabels: Record<string, string> = {
  trabalhista: 'Trabalhista',
  civil: 'Civil',
  criminal: 'Criminal',
  previdenciario: 'Previdenciário',
};

export const acaoSuggestions: Record<string, string[]> = {
  trabalhista: [
    'Reclamação Trabalhista',
    'Ação de Execução Trabalhista',
    'Dissídio Individual',
    'Inquérito Judicial',
    'Ação de Consignação',
    'Ação Rescisória',
  ],
  civil: [
    'Ação de Indenização por Dano Moral',
    'Ação de Indenização por Dano Material',
    'Ação de Dissolução Societária',
    'Ação Monitória',
    'Ação de Cobrança',
    'Ação de Execução Civil',
  ],
  criminal: [
    'Ação Penal Pública',
    'Habeas Corpus',
    'Mandado de Segurança Criminal',
    'Revisão Criminal',
    'Agravo em Execução',
  ],
  previdenciario: [
    'Concessão de Benefício Previdenciário',
    'Revisão de Benefício',
    'Restabelecimento de Benefício',
    'BPC/LOAS',
    'Salário-Maternidade',
    'Auxílio-Reclusão',
  ],
};

export const areaTribunalDefault: Record<string, TribunalType> = {
  trabalhista: 'TRT-2',
  civil: 'TJSP',
  criminal: 'TJSP',
  previdenciario: 'JEF/INSS',
};
