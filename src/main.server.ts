// src/main.server.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { config } from './app/app.config.server';

// O Angular moderno espera que a função de bootstrap retorne o mapeamento correto do contexto
const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;