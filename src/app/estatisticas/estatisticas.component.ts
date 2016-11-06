import { Component, OnInit } from '@angular/core';
import { OuvidoriaService } from '../ouvidoria.service';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.css']
})
export class EstatisticasComponent implements OnInit {

  dados: Array<any>;
  duvidasDados: Array<number> = [7,4,200];
  reclamacoesDados: Array<Number>;
  elogiosDados: Array<Number>;
  telefonemasQuantidade: Number = 0; // Array.reduce #dica
  enderecoQuantidade: Number = 0;
  tipoDoGrafico: string = 'doughnut'; // Não alterar
  labelsDoGrafico: Array<String> = ['Elogios', 'Reclamações', 'Dúvidas']; // Não alterar

  constructor(private _ouvidoriaService: OuvidoriaService) { }

  ngOnInit() {
    this._ouvidoriaService
      .obterDados()
      .subscribe(response => {
        var intents = response.map(x => x.intents[0].intent);
        console.log(intents);

        // var inputs = response.map(x => x.input.text);
        // console.log(inputs);

        var entities = response.map(x => x.entities && x.entities.length > 0 ? x.entities[0].value : null).filter(x => x != null);
        console.log(entities);

        var elogios = response.filter(x => x.entities && x.entities.length > 0 && x.entities[0].value == "elogio");
        console.log(elogios.length);

        var reclamacoes = response.filter(x => x.entities && x.entities.length > 0 && x.entities[0].value == "reclamação");
        console.log(reclamacoes.length);

        this.duvidasDados.push(elogios.length);
        this.duvidasDados.push(reclamacoes.length);
        this.duvidasDados.push(response.length - (elogios.length + reclamacoes.length));

        // TODO: map response => numeros de cada estatisticas;
        this.dados = response;
      }, err => {
        console.error(err.body);
      });
  }

}
