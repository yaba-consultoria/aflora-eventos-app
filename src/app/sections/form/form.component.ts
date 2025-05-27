import { Component } from '@angular/core';
import { NgxMaskDirective } from 'ngx-mask';


@Component({
  selector: 'app-form',
  imports: [NgxMaskDirective],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  minDate: string;

  constructor() {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0]; // formato YYYY-MM-DD
  }
}
