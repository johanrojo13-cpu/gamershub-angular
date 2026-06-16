import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  // Datos dinámicos que consumirá el HTML
  misJuegos = [
    {
      titulo: 'Chronicles of Eldoria',
      genero: 'RPG / Mundo Abierto',
      descripcion: 'Explora un continente devastado por la magia antigua en este espectacular título de nueva generación.',
      imagen: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=500&q=80'
    },
    {
      titulo: 'Cyber Sector 2088',
      genero: 'Estrategia / Sci-Fi',
      descripcion: 'Dirige tu facción hacker en una metrópolis cyberpunk. Toma decisiones tácticas en tiempo real.',
      imagen: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=500&q=80'
    },
    {
      titulo: 'Velocity Xtreme',
      genero: 'Carreras / Simulación',
      descripcion: 'Siente la velocidad pura con físicas realistas, más de 500 autos licenciados y clima dinámico.',
      imagen: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&w=500&q=80'
    }
  ];

  // Método para interactuar con los botones
  alertaAnalisis(nombreJuego: string) {
    alert(`¡Próximamente disponible el análisis detallado para ${nombreJuego}!`);
  }
}