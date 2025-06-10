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
    { nome: 'Lançamentos', icon: 'assets/img/lancamentos.png' },
    { nome: 'Coquetéis', icon: 'assets/img/coqueteis.png' },
    { nome: 'Reuniões', icon: 'assets/img/reunioes.png' },
    { nome: 'Palestras', icon: 'assets/img/palestras.png' },
    { nome: 'Sessões Fotográficas', icon: 'assets/img/sessoes-fotograficas.png' },
    { nome: 'Filmagens', icon: 'assets/img/filmagens.png' },
    { nome: 'Experiências', icon: 'assets/img/experiencias.png' },
    { nome: 'Celebrações', icon: 'assets/img/celebracoes.png' },
  ];
}
