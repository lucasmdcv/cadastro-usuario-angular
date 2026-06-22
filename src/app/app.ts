// src/app/app.component.ts ou src/app/app.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from './services/user.service';
import { User } from '../models/user.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Isso resolve os avisos de *ngIf, *ngFor e formGroup
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private fb = inject(FormBuilder);
  userService = inject(UserService);

  // Define o formulário com as validações requeridas
  userForm: FormGroup = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    cpf: ['', [Validators.required]],
    cep: ['', [Validators.required]],
    telefone: ['', [Validators.required]]
  });

  // Método para cadastrar manualmente
  onSubmit() {
    if (this.userForm.valid) {
      const newUser: User = {
        id: Math.random().toString(36).substring(2, 9),
        ...this.userForm.value
      };
      
      this.userService.addUser(newUser);
      this.userForm.reset();
    }
  }

  // Método para remover o usuário
  remove(id: string) {
    this.userService.removeUser(id);
  }

  // Método para chamar o gerador aleatório do serviço
  generateRandom() {
    this.userService.generateRandomUser();
  }
}