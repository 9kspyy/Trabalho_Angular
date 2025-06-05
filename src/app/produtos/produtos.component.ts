import { Component } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent {

  constructor(private apiProdutos: ProdutosService) { }

  produtosExibidos: any = [];

  exibirProdutos(){
    this.apiProdutos.gettodosprodutos().subscribe((resposta) => {
      this.produtosExibidos = resposta;
    });
  }

}
