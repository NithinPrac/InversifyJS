import { inject, injectable } from 'inversify';
import { ICar, IEngine } from './interfaces';
import { TYPES } from './TYPES';

@injectable()
export class Car implements ICar {
  private enginee;
  constructor(@inject(TYPES.IEngine) enginee: IEngine) {
    this.enginee = enginee;
  }
  drive(): string {
    return this.enginee.start();
  }
}
