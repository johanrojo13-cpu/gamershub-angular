import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './juego.html',
  styleUrl: './juego.css'
})
export class JuegoComponent implements OnInit {
  numeroSecreto!: number;
  numeroUsuario!: number | null;
  intentos!: number;
  mensaje!: string;
  juegoTerminado!: boolean;

  ngOnInit() {
    this.reiniciarJuego();
  }

  reiniciarJuego() {
    this.numeroSecreto = Math.floor(Math.random() * 100) + 1;
    this.numeroUsuario = null;
    this.intentos = 0;
    this.mensaje = 'Introduce un número del 1 al 100 para comenzar la misión.';
    this.juegoTerminado = false;
  }

  comprobarIntento() {
    if (this.numeroUsuario === null || this.numeroUsuario < 1 || this.numeroUsuario > 100) {
      this.mensaje = '⚠️ Por favor, ingresa un número válido entre 1 y 100.';
      return;
    }

    this.intentos++;

    if (this.numeroUsuario === this.numeroSecreto) {
      this.mensaje = `🎉 ¡Felicidades, Gamer! Desbloqueaste el logro. Adivinaste el número en ${this.intentos} intentos.`;
      this.juegoTerminado = true;
    } else if (this.numeroUsuario < this.numeroSecreto) {
      this.mensaje = '📈 El número secreto es MÁS ALTO. ¡Sigue intentando!';
    } else {
      this.mensaje = '📉 El número secreto es MÁS BAJO. ¡Sigue intentando!';
    }

    this.numeroUsuario = null; 
  }
}