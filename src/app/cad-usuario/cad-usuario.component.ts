import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrl: './cad-usuario.component.scss'
})
export class CadUsuarioComponent {
  formulario = new FormGroup({
    usuario: new FormControl(''),
    nome: new FormControl(''),
    sobrenome: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl(''),
    telefone: new FormControl(''),
    endereco: new FormControl(''),
    dataNascimento: new FormControl(''),
  })

  onSave(){
  //armazena o formulario em uma variavel para melhor manipulação
  let dados = this.formulario.value;
  //abre uma conexão asíncrona com o serviço
  this.usuarioService.salvar(dados).subscribe({
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
  private usuarioService:UsuarioService
){}

}
