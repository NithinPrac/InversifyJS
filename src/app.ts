import { TYPES } from './TYPES';
import 'reflect-metadata';
import { ICar } from './interfaces';
import { container } from './inversify.config';

const car = container.get<ICar>(TYPES.ICar);
console.log(car.drive());
