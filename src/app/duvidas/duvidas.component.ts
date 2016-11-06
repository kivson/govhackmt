import { Component, OnInit } from '@angular/core';
import { OuvidoriaService } from '../ouvidoria.service';

import { Mensagem } from '../models/mensagem.model';

@Component({
  selector: 'app-duvidas',
  templateUrl: './duvidas.component.html',
  styleUrls: ['./duvidas.component.css']
})
export class DuvidasComponent implements OnInit {
constructor(private _ouvidoriaService: OuvidoriaService) { }

  duvidas: Array<Mensagem>;

    ngOnInit() {
      this._ouvidoriaService
        .obterDados()
        .subscribe(response => {
          this.duvidas = response.filter(x => x.entities && x.entities.length > 0 && x.entities[0].value !== 'elogio' && x.entities[0].value !== 'reclamação');
  }, err => {
          console.error(err.body);
        });
  }

}
