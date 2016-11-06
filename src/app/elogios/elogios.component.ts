import { Component, OnInit } from '@angular/core';
import { OuvidoriaService } from '../ouvidoria.service';

import { Mensagem } from '../models/mensagem.model';

@Component({
  selector: 'app-elogios',
  templateUrl: './elogios.component.html',
  styleUrls: ['./elogios.component.css']
})
export class ElogiosComponent implements OnInit {
  constructor(private _ouvidoriaService: OuvidoriaService) { }

  elogios: Array<Mensagem>;

    ngOnInit() {
      this._ouvidoriaService
        .obterDados()
        .subscribe(response => {
          this.elogios = response.filter(x => x.entities && x.entities.length > 0 && x.entities[0].value === 'elogio');
  }, err => {
          console.error(err.body);
        });
  }
}
