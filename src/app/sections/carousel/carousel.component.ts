import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
eventos = [
  { nome: 'Exposições', icon: 'assets/img/exposicoes.png' },
  { nome: 'Sessões Fotográficas', icon: 'assets/img/sessoes-fotograficas.png' },
  { nome: 'Filmagens', icon: 'assets/img/filmagens.png' },
  { nome: 'Vivências', icon: 'assets/img/experiencias.png' },
  { nome: 'Ativação de Marca', icon: 'assets/img/ativacao-de-marca.png' },
  { nome: 'Lançamentos', icon: 'assets/img/lancamentos.png' },
  { nome: 'Palestras e Reuniões', icon: 'assets/img/palestras.png' },
  { nome: 'Celebrações', icon: 'assets/img/celebracoes.png' },
];
}
