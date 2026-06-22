// src/app/services/user.service.ts
import { Injectable, signal } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // Utilizando Signals (Angular 16+) para gerenciamento de estado reativo e performático
  private usersSignal = signal<User[]>([]);
  users = this.usersSignal.asReadonly();

  constructor() {
    // Adiciona um usuário inicial para demonstração
    this.generateRandomUser();
  }

  addUser(user: User) {
    this.usersSignal.update((currentUsers) => [...currentUsers, user]);
  }

  removeUser(id: string) {
    this.usersSignal.update((currentUsers) => currentUsers.filter((u) => u.id !== id));
  }

  // Função para gerar dados fictícios, mas com formato válido para testes
  generateRandomUser() {
    const nomes = ['Lucas Silva', 'Mariana Costa', 'Rodrigo Mendes', 'Beatriz Oliveira', 'Gabriel Santos', 'Ana Souza', 'Mateus Pereira', 'Julia Almeida', 'Pedro Rocha', 'Larissa Fernandes', 'Bruno Carvalho', 'Camila Lima', 'Thiago Araujo', 'Amanda Ribeiro', 'Felipe Martins', 'Leticia Barbosa', 'Diego Rodrigues', 'Barbara Gomes', 'Rafael Alves', 'Jessica Melo', 'Gustavo Cardoso', 'Bruna Teixeira', 'Leonardo Correia', 'Carolina Marques', 'Vinicius Cavalcanti', 'Natalia Dias', 'Daniel Castro', 'Vanessa Vieira', 'Alexandre Cunha', 'Aline Nascimento', 'Eduardo Ramos', 'Juliana Freitas', 'Ricardo Moreira', 'Gabriela Pinto', 'Marcelo Viana', 'Priscila Farias', 'Rodrigo Guimaraes', 'Danielle Assis', 'Fernando Azevedo', 'Tatiane Campos', 'Caio Fontes', 'Luana Neves', 'Guilherme Macedo', 'Renata Caldeira', 'Arthur Aguiar', 'Fernanda Seixas', 'Lucas Gabriel', 'Maria Eduarda', 'João Pedro', 'Ana Clara', 'Enzo Gabriel', 'Maria Luiza', 'Pedro Henrique', 'Alice Santos', 'Miguel Oliveira', 'Sophia Costa', 'Arthur Rodrigues', 'Helena Jesus', 'Gabriel Lima', 'Valentina Silva', 'Bernardo Souza', 'Laura Pereira', 'Heitor Almeida', 'Isabella Rocha', 'Davi Fernandes', 'Manuela Carvalho', 'Lorenzo Araujo', 'Juliana Fonseca', 'Matheus Ribeiro', 'Giovanna Martins', 'Samuel Barbosa', 'Beatriz Santos', 'Lucas Barbosa', 'Heloisa Lima', 'Benjamin Costa', 'Maria Alice', 'Murilo Guimaraes', 'Laura Castro', 'Joaquim Nogueira', 'Lavinia Silveira', 'Samuel Xavier', 'Inacio Pires', 'Erick Frota', 'Catarina Lins', 'Derick Soares', 'Mirella Antunes', 'Yago Bragança', 'Taina Meireles', 'Ruan Valente', 'Suellen Rezende', 'Caua Diniz', 'Isadora Sanches', 'Murilo Padilha', 'Lara Portela', 'Vitor Godoy', 'Clara Dornelles', 'Otto Valadares', 'Alice Junqueira', 'Yuri Malheiro', 'Cecilia Arantes'];
    const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];

    const randomDigit = () => Math.floor(Math.random() * 10);

    const fakeCpf = `${randomDigit()}${randomDigit()}${randomDigit()}.${randomDigit()}${randomDigit()}${randomDigit()}.${randomDigit()}${randomDigit()}${randomDigit()}-${randomDigit()}${randomDigit()}`;
    const fakeCep = `${randomDigit()}${randomDigit()}${randomDigit()}${randomDigit()}${randomDigit()}-${randomDigit()}${randomDigit()}${randomDigit()}`;
    const fakeTelefone = `(61) 9${randomDigit()}${randomDigit()}${randomDigit()}${randomDigit()}-${randomDigit()}${randomDigit()}${randomDigit()}${randomDigit()}`;

    const emailPrefix = nomeAleatorio.toLowerCase().replace(' ', '.');

    // 1. Criamos um array com as opções de domínio
    const dominios = ['@gmail.com', '@yahoo.com'];

    // 2. Sorteamos o índice (0 ou 1)
    const selectedIndex = Math.floor(Math.random() * dominios.length);

    // 3. Montamos o e-mail final combinando o prefixo com o domínio sorteado
    const fakeEmail = `${emailPrefix}${dominios[selectedIndex]}`;

    const newUser: User = {
      id: Math.random().toString(36).substring(2, 9),
      nome: nomeAleatorio,
      cpf: fakeCpf,
      cep: fakeCep,
      telefone: fakeTelefone,
      email: fakeEmail,
    };

    this.addUser(newUser);
  }
}
