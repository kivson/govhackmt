import { Component, OnInit } from '@angular/core';
import { OuvidoriaService } from '../ouvidoria.service';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.css']
})
export class EstatisticasComponent implements OnInit {

  dados: Array<any>;

  constructor(private _ouvidoriaService: OuvidoriaService) { }

  ngOnInit() {
    this._ouvidoriaService
      .obterDados()
      .subscribe(response => {
        console.log(this.dados);
        this.dados = response;
      }, err => {
        console.error(err.body);
      });
  }

}
