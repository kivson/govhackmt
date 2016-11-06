import { Component, OnInit } from '@angular/core';
import { OuvidoriaService } from '../ouvidoria.service';

import { Mensagem } from '../models/mensagem.model';

@Component({
  selector: 'app-reclamacoes',
  templateUrl: './reclamacoes.component.html',
  styleUrls: ['./reclamacoes.component.css']
})
export class ReclamacoesComponent implements OnInit {
constructor(private _ouvidoriaService: OuvidoriaService) { }

  reclamacoes: Array<Mensagem>;

    ngOnInit() {
      this._ouvidoriaService
        .obterDados()
        .subscribe(response => {
          this.reclamacoes = response.filter(x => x.entities && x.entities.length > 0 && x.entities[0].value === 'reclamação');
  }, err => {
          console.error(err.body);
        });
  }
}
