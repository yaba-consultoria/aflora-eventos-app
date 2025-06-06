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
        'O espaço do museu é simplesmente fantástico, uma imersão artística e cultural que inspira logo na chegada. Estar ali é mergulhar na história de Guilherme de Almeida e vivenciar a relação entre literatura, arte e memória. Um ambiente único, que transforma qualquer evento em uma experiência com identidade e significado.',
    },
    {
      nome: 'Fabio Bianco',
      texto:
        'A Casa Guilherme de Almeida é um encanto em cada detalhe. Os móveis, obras e objetos originais preservam a memória e o romantismo de uma época marcante. O ambiente é acolhedor, inspirador e ideal para quem busca um espaço com identidade cultural.',
    },
    {
      nome: 'Guilherme Ramos',
      texto:
        'A Casa das Rosas, localizada na Avenida Paulista, em São Paulo, é um dos poucos casarões históricos ainda preservados na região. Construída em 1935 em estilo clássico francês, já foi residência da família do aristocrata Ramos de Azevedo. Hoje, funciona como um espaço cultural dedicado à literatura, oferecendo exposições, cursos e eventos. Seu belo jardim de rosas é um dos destaques, tornando o local um refúgio tranquilo no coração da cidade.',
    },
    {
      nome: 'Anna Cecília',
      texto:
        'Um verdadeiro mergulho na história da Avenida Paulista. A reforma da Casa das Rosas revelou ainda mais da sua beleza e originalidade. Destaque para os jardins, com diferentes variedades de rosas e uma atmosfera encantadora.',
    },
    {
      nome: 'Indira Arruda',
      texto:
        'Lugar muito especial onde viveu o maior ativista brasileiro. Justa homenagem que a sua casa seja um museu, o qual, após a última reforma, ficou ainda mais bonito, instrutivo e precioso, enquanto preservação desse nosso grande patrimônio cultural!',
    },
    {
      nome: 'Letícia Novais',
      texto:
        'Um lugar especial, que preserva a memória de um dos maiores nomes do modernismo brasileiro. A Casa Mário de Andrade, agora revitalizada, se tornou ainda mais bonita e significativa um espaço que celebra nossa cultura e mantém viva a história de um verdadeiro ícone da arte e da literatura.',
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
