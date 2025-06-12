import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-cadastrar-produto',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './cadastrar-produto.component.html',
  styleUrl: './cadastrar-produto.component.scss'
})
export class CadastrarProdutoComponent {
   constructor(private apiProdutos: ProdutosService) { }
   
   produtosExibidos: any = [];
   resposta: any = "";

   produto = {
    "name": "",
    "data": {
      "cor": "",
      "capacidae": "",
      "preco": ""
    }
   }
    
   cadastrar() {
      this.apiProdutos.postProduto(this.produto).subscribe(p =>{
        this.resposta = p;
        console.log(this.resposta);
      })
   }


}
