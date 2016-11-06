import { Component, OnInit } from '@angular/core';
import { OuvidoriaService } from '../ouvidoria.service';
import { Mensagem } from '../models/mensagem.model';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  tiposDeManifestacao: Array<Mensagem> = new Array<Mensagem>();
  intencoes: Array<string> = new Array<string>();

  constructor(private _ouvidoriaService: OuvidoriaService) { }

  ngOnInit() {

    this._ouvidoriaService
      .obterDados()
      .subscribe(response => {

        this.tiposDeManifestacao = response;
        this.intencoes = response.map(x => x.intents[0].intent);

      }, err => {
        console.error(err.body);
      });
  }

}
