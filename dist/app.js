"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TYPES_1 = require("./TYPES");
require("reflect-metadata");
const inversify_config_1 = require("./inversify.config");
const car = inversify_config_1.container.get(TYPES_1.TYPES.ICar);
console.log(car.drive());
