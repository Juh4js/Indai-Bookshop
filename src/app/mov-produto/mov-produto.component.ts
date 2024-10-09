import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProdutoService } from '../produto.service';
import { MovimentacaoService } from '../movimentacao.service';

@Component({
  selector: 'app-mov-produto',
  templateUrl: './mov-produto.component.html',
  styleUrl: './mov-produto.component.scss'
})
export class MovProdutoComponent {
  formulario = new FormGroup({
    id: new FormControl(''),
    dataMovimentacao: new FormControl(''),
    produto: new FormControl(''),
    quantidade: new FormControl(''),
    tipo: new FormControl(''),
  })

  onSave(){
    //armazena o formulario em uma variavel para melhor manipulação
    let dados = this.formulario.value;
    //abre uma conexão asíncrona com o serviço
    this.movimentacaoService.salvar(dados).subscribe({
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
    private movimentacaoService:MovimentacaoService
  ){}
}
