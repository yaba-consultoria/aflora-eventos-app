import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  imports: [],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {

  scrollToForm(): void {
  const el = document.getElementById('formulario-proposta');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

}
