import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Mensagem } from './models/mensagem.model';

@Injectable()
export class OuvidoriaService {

  private url: string = "http://govhackchat.mybluemix.net/givemeall";

  constructor(private _http: Http) { }

  obterDados(): Observable<Array<Mensagem>> {
    return this._http
      .get(this.url)
      .map(response => response.json())
      .catch(err => Observable.throw(err));
  }

}
