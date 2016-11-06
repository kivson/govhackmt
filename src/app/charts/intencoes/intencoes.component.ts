import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-intencoes',
  templateUrl: './intencoes.component.html',
  styleUrls: ['./intencoes.component.css']
})
export class IntencoesComponent {

  @Input() 
  get intencoes(): Array<string> {
    return this._intencoes;
  }
  set intencoes(intencoes: Array<string>) {
    this._intencoes = intencoes;
    console.log(this._intencoes);

    //  let intents = intencoes.map(x => x.intents[0].intent);
    //  console.log(intents);
  }

  private _intencoes: Array<string> = new Array<string>();

}
