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
  id: any = "";
  resposta: any;
  exibirTodos: boolean = false;
  exibirUnicoProduto: boolean = false;

  exibirProdutos() {
    this.exibirTodos = true;
    this.apiProdutos.gettodosprodutos().subscribe((resposta) => {
      this.produtosExibidos = resposta;
    });
  }

  consultar() {
    this.apiProdutos.getProdutosID(this.id).subscribe(p => {
      this.resposta = p;
      console.log(this.resposta);
      this.exibirUnicoProduto = true;
    })

  }
}
