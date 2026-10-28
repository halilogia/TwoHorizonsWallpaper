import { startApp } from './app.js';
import { AURUM, createAurum } from './aurum.js';

startApp([{ config: AURUM, create: createAurum }]);
