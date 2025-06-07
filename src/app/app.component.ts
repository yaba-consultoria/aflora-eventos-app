import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './sections/header/header.component';
import { MuseusComponent } from './sections/museus/museus.component';
import { CarouselComponent } from './sections/carousel/carousel.component';
import { LocacaoComponent } from './sections/locacao/locacao.component';
import { VideoComponent } from './sections/video/video.component';
import { DepoimentosComponent } from './sections/depoimentos/depoimentos.component';
import { FormComponent } from './sections/form/form.component';
import { FooterComponent } from './sections/footer/footer.component';
import { SobreComponent } from './sections/sobre/sobre.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    MuseusComponent,
    CarouselComponent,
    LocacaoComponent,
    DepoimentosComponent,
    FormComponent,
    FooterComponent,
    SobreComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'aflora-eventos-app';
}
