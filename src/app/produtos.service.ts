import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  private urlBaseApi = "https://api.restful-api.dev/";

  gettodosprodutos(){
    var url = this.urlBaseApi + 'objects';
    return this.http.get(url); 
  }

  getProdutosID(id: any){
    var url = this.urlBaseApi + `objects/${id}`;
    return this.http.get(url);
  }

  postProduto(objeto: any){
    var url = this.urlBaseApi + 'objects';
    return this.http.post(url, objeto); 
  }

  
}
