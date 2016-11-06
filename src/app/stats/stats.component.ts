import { Component, OnInit } from '@angular/core';
import { OuvidoriaService } from '../ouvidoria.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  tiposDeManifestacoesOptions = {};

  constructor(private _ouvidoriaService: OuvidoriaService) { }

  ngOnInit() {

    this._ouvidoriaService
      .obterDados()
      .subscribe(response => {
        // var intents = response.map(x => x.intents[0].intent);
        // console.log(intents);
        // var entities = response.map(x => x.entities && x.entities.length > 0 ? x.entities[0].value : null).filter(x => x != null);
        // console.log(entities);

        let totalDeManifestacoes = response.length;

        let totalDeElogios = response.filter(x => x.entities && x.entities.length > 0 && x.entities[0].value == "elogio").length;
        let elogiosPerc = parseFloat(((totalDeElogios * 100) / (totalDeManifestacoes)).toFixed(2));

        let totalDeReclamacoes = response.filter(x => x.entities && x.entities.length > 0 && x.entities[0].value == "reclamação").length;
        let reclamacoesPerc = parseFloat(((totalDeReclamacoes * 100) / (totalDeManifestacoes)).toFixed(2));

        let totalDeDuvidas = totalDeManifestacoes - (totalDeElogios + totalDeReclamacoes);
        let duvidasPerc = parseFloat(((totalDeDuvidas * 100) / (totalDeManifestacoes)).toFixed(2));

        this.tiposDeManifestacoesOptions = {
          chart: { type: 'pie' },
          title: { text: 'Estatísticas' },
          series: [{
            name: 'Tipo de Manifestação',
            colorByPoint: true,
            data: [{
              name: 'Elogios',
              y: elogiosPerc
            }, {
              name: 'Reclamações',
              y: reclamacoesPerc
            }, {
              name: 'Dúvidas',
              y: duvidasPerc
            }]
          }]
        };

      }, err => {
        console.error(err.body);
      });
  }

}
