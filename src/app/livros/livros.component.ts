import { Component } from '@angular/core';
import booksDB from '../../assets/booksDB.json'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-livros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './livros.component.html',
  styleUrl: './livros.component.scss'
})
export class LivrosComponent {

  ListaLivros = booksDB.books;

  exibirLivros() {
    console.log(this.ListaLivros)
  }

}
