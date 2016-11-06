import { Component, Input } from '@angular/core';
import { Mensagem } from '../../models/mensagem.model';

@Component({
  selector: 'app-tipos-manifestacoes',
  templateUrl: './tipos-manifestacoes.component.html',
  styleUrls: ['./tipos-manifestacoes.component.css']
})
export class TiposManifestacoesComponent {

  @Input()
  get tiposDeManifestacoes(): Array<Mensagem> {
    return this._tiposDeManifestacoes;
  }
  set tiposDeManifestacoes(tiposDeManifestacoes: Array<Mensagem>) {
    if (tiposDeManifestacoes) {
      let totalDeManifestacoes = tiposDeManifestacoes.length;

      let totalDeElogios = tiposDeManifestacoes.filter(x => x.entities && x.entities.length > 0 && x.entities[0].value == "elogio").length;
      let elogiosPerc = parseFloat(((totalDeElogios * 100) / (totalDeManifestacoes)).toFixed(2));

      let totalDeReclamacoes = tiposDeManifestacoes.filter(x => x.entities && x.entities.length > 0 && x.entities[0].value == "reclamação").length;
      let reclamacoesPerc = parseFloat(((totalDeReclamacoes * 100) / (totalDeManifestacoes)).toFixed(2));

      let totalDeDuvidas = totalDeManifestacoes - (totalDeElogios + totalDeReclamacoes);
      let duvidasPerc = parseFloat(((totalDeDuvidas * 100) / (totalDeManifestacoes)).toFixed(2));

      this._tiposDeManifestacoesOptions = {
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
    }
  }

  private _tiposDeManifestacoes: Array<Mensagem> = new Array<Mensagem>();
  private _tiposDeManifestacoesOptions = {};

}
