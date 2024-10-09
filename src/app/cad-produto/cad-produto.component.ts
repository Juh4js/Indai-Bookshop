import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-cad-produto',
  templateUrl: './cad-produto.component.html',
  styleUrl: './cad-produto.component.scss'
})
export class CadProdutoComponent {
  formulario = new FormGroup({
    nome: new FormControl(''),
    preco: new FormControl(''),
    fabricante: new FormControl(''),
    descricao: new FormControl(''),
    link: new FormControl(''),
  })

  onSave(){
    //armazena o formulario em uma variavel para melhor manipulação
    let dados = this.formulario.value;
    //abre uma conexão asíncrona com o serviço
    this.produtoService.salvar(dados).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(error)=>{
        console.log(error)
      }
    }) 
  }
    onCancelar(){
    this.formulario.reset()
  }
   
  constructor(
    private produtoService:ProdutoService
  ){}
}
