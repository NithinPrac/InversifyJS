import { Container } from 'inversify';
import { ICar, IEngine } from './interfaces';
import { TYPES } from './TYPES';
import { Enginee } from './engine';
import { Car } from './Car';

const container = new Container();
container.bind<IEngine>(TYPES.IEngine).to(Enginee);
container.bind<ICar>(TYPES.ICar).to(Car);

export { container };
