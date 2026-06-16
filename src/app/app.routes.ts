import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', 
    loadComponent: () => import('./home/home').then(m => m.HomeComponent)
  },
  { 
    path: 'about', 
    loadComponent: () => import('./about/about').then(m => m.AboutComponent) 
  },
  { 
    path: 'jugar', // Nueva ruta para el minijuego
    loadComponent: () => import('./juego/juego').then(m => m.JuegoComponent) 
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];