import { Component, OnInit, signal, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { collection, addDoc, getFirestore, Firestore } from 'firebase/firestore';
import { firebaseApp } from '../../../app/app.config';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  minDate: string;
  formLead: FormGroup;
  loading = signal(false);
  successMessage = signal('');

  private firestore: Firestore = getFirestore(firebaseApp);

  constructor(private fb: FormBuilder) {
    this.formLead = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      tipo: ['', Validators.required],
      museu: ['', Validators.required],
      data: ['', Validators.required],
      detalhamento: ['', Validators.required],
    });

    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }

  ngOnInit() {}

  async submitForm() {
    if (this.formLead.invalid) return;

    this.loading.set(true);
    try {
      const leadsCol = collection(this.firestore, 'leads');
      await addDoc(leadsCol, this.formLead.value);

      this.successMessage.set('Solicitação enviada com sucesso!');
      // Limpa o formulário após o envio    
      this.formLead.reset();
    } catch (err) {
      console.error('Erro ao enviar lead:', err);
      this.successMessage.set('Ocorreu um erro. Tente novamente.');
    } finally {
      this.loading.set(false);
      // auto-hide depois de 4s
      setTimeout(() => this.successMessage.set(''), 4000);
    }
  }
}
