export interface Rules {
  disable?: DisableOptions[];
  prefix?: string;
}

export type DisableOptions = 'warn' | 'error' | 'log';

export enum DisableOptionsEnum {
  warn = 'warn',
  error = 'error',
  log = 'log'
}