import { PracticeArea } from '@/types';

/* ── Base interfaces ── */

export interface Cliente {
  id: string
  type: 'pf' | 'pj'
  practice_area: 'criminal' | 'trabalhista' | 'civil' | 'previdenciario'
  status: 'ativo' | 'inativo' | 'arquivado'
  is_vip: boolean
  responsible_id: string
  nome: string
  cpf?: string
  cnpj?: string
  email?: string
  telefone?: string
  celular?: string
  cep?: string
  logradouro?: string
  numero?: string
  complemento?: string
  bairro?: string
  cidade?: string
  estado?: string
  observacoes?: string
  metadata?: Record<string, any>
  created_at: string
  updated_at: string
  created_by: string
  deleted_at?: string | null
}

/* ── Helpers ── */

export function getClienteName(c: Cliente): string {
  return c.nome;
}

export function getClienteDoc(c: Cliente): string {
  return c.cpf || c.cnpj || '';
}

export function getClienteEmail(c: Cliente): string {
  return c.email || '';
}

export function maskCpf(cpf: string): string {
  if (!cpf || cpf.length < 11) return cpf;
  const d = cpf.replace(/\D/g, '');
  if (d.length < 11) return cpf;
  return `${d.slice(0, 3)}.***.**-${d.slice(9, 11)}`;
}

export function maskCnpj(cnpj: string): string {
  if (!cnpj || cnpj.length < 14) return cnpj;
  const d = cnpj.replace(/\D/g, '');
  if (d.length < 14) return cnpj;
  return `${d.slice(0, 2)}.${d.slice(2, 5)}.***/****-${d.slice(12, 14)}`;
}

export function getPoloLabel(polo: string): string {
  const map: Record<string, string> = {
    reclamante: 'Reclamante',
    reclamada: 'Reclamada',
    reclamada_pf: 'Reclamada',
    autor: 'Autor',
    reu: 'Réu',
    vitima: 'Vítima',
    investigado: 'Investigado',
    terceiro_interessado: 'Terceiro',
  };
  return map[polo] || polo;
}

/* ── Masks ── */

export function applyCpfMask(value: string): string {
  const d = value.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `${d.slice(0, 3)}.${d.slice(3)}`;
  if (d.length <= 9) return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6)}`;
  return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9)}`;
}

export function applyCnpjMask(value: string): string {
  const d = value.replace(/\D/g, '').slice(0, 14);
  if (d.length <= 2) return d;
  if (d.length <= 5) return `${d.slice(0, 2)}.${d.slice(2)}`;
  if (d.length <= 8) return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5)}`;
  if (d.length <= 12) return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5, 8)}/${d.slice(8)}`;
  return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5, 8)}/${d.slice(8, 12)}-${d.slice(12)}`;
}

export function applyPhoneMask(value: string): string {
  const d = value.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : '';
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export function formatBRL(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function parseBRL(value: string): number {
  return Number(value.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
}
