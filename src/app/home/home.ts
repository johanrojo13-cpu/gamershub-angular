import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  misJuegos = [
    {
      titulo: 'Chronicles of Eldoria',
      genero: 'RPG / Mundo Abierto',
      descripcion: 'Explora un continente devastado por la magia antigua.',
      imagen: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=500&q=80'
    },
    {
      titulo: 'Cyber Sector 2088',
      genero: 'Estrategia / Sci-Fi',
      descripcion: 'Dirige tu facción hacker en una metrópolis cyberpunk.',
      imagen: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=500&q=80'
    },
    {
      titulo: 'Velocity Xtreme',
      genero: 'Carreras / Simulación',
      descripcion: 'Siente la velocidad pura con físicas realistas.',
      imagen: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&w=500&q=80'
    }
  ];

  alertaAnalisis(nombreJuego: string) {
    alert(`¡Próximamente disponible el análisis para ${nombreJuego}!`);
  }
}