import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }  from '@angular/router';

import { AppComponent } from './app.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';
import { ElogiosComponent } from './elogios/elogios.component';
import { ReclamacoesComponent } from './reclamacoes/reclamacoes.component';
import { DuvidasComponent } from './duvidas/duvidas.component';

import { OuvidoriaService } from './ouvidoria.service';

@NgModule({
  declarations: [
    AppComponent,
    EstatisticasComponent,
    ElogiosComponent,
    ReclamacoesComponent,
    DuvidasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: EstatisticasComponent },
      { path: 'elogios', component: ElogiosComponent },
      { path: 'reclamacoes', component: ReclamacoesComponent },
      { path: 'duvidas', component: DuvidasComponent }
    ])
  ],
  providers: [
    OuvidoriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
