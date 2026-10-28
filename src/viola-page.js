import { startApp } from './app.js';
import { VIOLA, createViola } from './viola.js';

startApp([{ config: VIOLA, create: createViola }]);
