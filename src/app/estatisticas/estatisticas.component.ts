import { Component, OnInit } from '@angular/core';
import { OuvidoriaService } from '../ouvidoria.service';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.css']
})
export class EstatisticasComponent implements OnInit {

  dados: Array<any>;
  duvidasDados: Array<Number>;
  reclamacoesDados: Array<Number>;
  elogiosDados: Array<Number>;
  telefonemasQuantidade: Number = 0; // Array.reduce #dica
  enderecoQuantidade: Number = 0;
  tipoDoGrafico: String = 'line'; // Não alterar
  labelsDoGrafico: Array<String> = ['Mês', 'Semana', 'Dia']; // Não alterar

  constructor(private _ouvidoriaService: OuvidoriaService) { }

  ngOnInit() {
    this._ouvidoriaService
      .obterDados()
      .subscribe(response => {
        // TODO: map response => numeros de cada estatisticas;
        this.dados = response;
      }, err => {
        console.error(err.body);
      });
  }

}
