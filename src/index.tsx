export * from './common/index';
export * from './components/index';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}
