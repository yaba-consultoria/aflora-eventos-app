import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-depoimentos',
  imports: [CommonModule],
  templateUrl: './depoimentos.component.html',
  styleUrl: './depoimentos.component.css',
})
export class DepoimentosComponent {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  depoimentos = [
    {
      nome: 'Alexandre',
      texto:
        'O espaço do Museu é simplesmente fantástico, uma imersão artística e cultural que inspira logo na chegada. Estar ali é mergulhar na história de Guilherme de Almeida e vivenciar a relação entre literatura, arte e memória. Um ambiente único, que transforma qualquer evento em uma experiência com identidade e significado.',
    },
    {
      nome: 'Anna Cecília',
      texto:
        'Uma verdadeira imersão na história da Avenida Paulista. A reforma da Casa das Rosas revelou ainda mais da sua beleza e originalidade, com ambientes preservados e abertos ao público. Destaque para os jardins, com diferentes variedades de rosas e uma atmosfera encantadora, um cenário único para quem busca arte, memória e inspiração em um só lugar.',
    },
    {
      nome: 'Letícia Novais',
      texto:
        'Um lugar especial que relembra a memória de um dos maiores nomes do modernismo brasileiro. A Casa Mário de Andrade, agora revitalizada, se tornou ainda mais bonita e significativa um espaço que celebra nossa cultura e mantém viva a história de um verdadeiro ícone da arte e da literatura.',
    },
  ];

  scrollLeft() {
    const track = document.querySelector('.carousel-track') as HTMLElement;
    const cardWidth = track.querySelector('.card')?.clientWidth || 0;
    const gap = 20;
    const scrollAmount = (cardWidth + gap) * 1;

    track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }

  scrollRight() {
      const track = document.querySelector('.carousel-track') as HTMLElement;
  const cardWidth = track.querySelector('.card')?.clientWidth || 0;
  const gap = 20; // gap de 1.5rem
  const scrollAmount = (cardWidth + gap) * 1;

  track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }

  scrollToForm(): void {
    const el = document.getElementById('formulario-proposta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
