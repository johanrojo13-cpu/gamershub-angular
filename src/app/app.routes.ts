import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', // Ruta vacía = Página de Inicio (localhost:4200)
    loadComponent: () => import('./home/home').then(m => m.HomeComponent)
  },
  { 
    path: 'about', // localhost:4200/about
    loadComponent: () => import('./about/about').then(m => m.AboutComponent) 
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];