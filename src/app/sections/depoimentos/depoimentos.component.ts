import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-depoimentos',
  imports: [CommonModule],
  templateUrl: './depoimentos.component.html',
  styleUrl: './depoimentos.component.css'
})
export class DepoimentosComponent {

    @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  depoimentos = [
    {
      nome: 'Alexandre',
      texto:
        'O espaço do museu é simplesmente fantástico, uma imersão artística e cultural que inspira logo na chegada. Estar ali é mergulhar na história de Guilherme de Almeida e vivenciar a relação entre literatura, arte e memória. Um ambiente único, que transforma qualquer evento em uma experiência com identidade e significado.',
    },
    {
      nome: 'Fabio Bianco',
      texto:
        'A Casa Guilherme de Almeida é um encanto em cada detalhe. Os móveis, obras e objetos originais preservam a memória e o romantismo de uma época marcante. O ambiente é acolhedor, inspirador e ideal para quem busca um espaço com identidade cultural.',
    },
    {
      nome: 'Anna Cecília',
      texto:
        'Um verdadeiro mergulho na história da Avenida Paulista. A reforma da Casa das Rosas revelou ainda mais da sua beleza e originalidade. Destaque para os jardins, com diferentes variedades de rosas e uma atmosfera encantadora.',
    },
  ];

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -400, behavior: 'smooth' });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: 400, behavior: 'smooth' });
  }

  scrollToForm(): void {
    const el = document.getElementById('formulario-proposta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
