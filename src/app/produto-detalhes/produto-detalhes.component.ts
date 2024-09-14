import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.scss']
})
export class ProdutoDetalhesComponent implements OnInit {
  produtoId: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.produtoId = this.route.snapshot.paramMap.get('id');
    // Aqui você deve buscar os detalhes do produto com base no produtoId
    // Por exemplo, usando um serviço que faz uma chamada HTTP
  }}
