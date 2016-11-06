import { Component, OnInit } from '@angular/core';
import { OuvidoriaService } from '../ouvidoria.service';
import { Mensagem } from '../models/mensagem.model';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.css']
})
export class EstatisticasComponent implements OnInit {

  dados: Array<any>;
  duvidasDados: Number = 0;
  reclamacoesDados: Number = 0;
  elogiosDados: Number = 0;
  telefonemasQuantidade: Number = 0;
  enderecoQuantidade: Number = 0;
  totalDados: Number = 0;

  tiposDeManifestacao: Array<Mensagem> = new Array<Mensagem>();
  intencoes: Array<string> = new Array<string>();

  constructor(private _ouvidoriaService: OuvidoriaService) { }

  ngOnInit() {
    this._ouvidoriaService
      .obterDados()
      .subscribe(response => {
        this.tiposDeManifestacao = response;
        this.intencoes = response.map(x => x.intents[0].intent);
        
        let intents = response.map(x => x.intents[0].intent);

        let entities = response.map(x => x.entities && x.entities.length > 0 ? x.entities[0].value : null).filter(x => x != null);

        let elogios = response.filter(x => x.entities && x.entities.length > 0 && x.entities[0].value === 'elogio');

        let reclamacoes = response.filter(x => x.entities && x.entities.length > 0 && x.entities[0].value === 'reclamação');

        this.duvidasDados = response.length - (elogios.length + reclamacoes.length);
        this.totalDados = response.length;
        this.reclamacoesDados = reclamacoes.length;
        this.elogiosDados = elogios.length;

        this.dados = response;
      }, err => {
        console.error(err.body);
      });
  }

}