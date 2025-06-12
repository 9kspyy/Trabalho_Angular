import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LivrosComponent } from './livros/livros.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FilmesswComponent } from './filmessw/filmessw.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import path from 'path';

export const routes: Routes = [
    {path: "livros", component: LivrosComponent},
    {path: "home", component: HomeComponent},
    {path: "filmessw", component: FilmesswComponent},
    {path: "produtos", component: ProdutosComponent},
    {path: "cadastrar-produto", component: CadastrarProdutoComponent},
    {path: "**", component: NotfoundComponent}
];
