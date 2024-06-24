import { injectable } from 'inversify';
import { IEngine } from './interfaces';

@injectable()
export class Enginee implements IEngine {
  start(): string {
    return 'Car engine started';
  }
}
