import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RutaHomeComponent } from './ruta-home/ruta-home.component';
import { RutaFaqComponent } from './ruta-faq/ruta-faq.component';
import { RutaNoEncontradaComponent } from './ruta-no-encontrada/ruta-no-encontrada.component';
import { config } from 'rxjs';
import { HttpClient } from 'selenium-webdriver/http';
import { RutaPerfilComponent } from './ruta-perfil/ruta-perfil.component';
import { RutaUsuarioComponent } from './ruta-usuario/ruta-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaHomeComponent,
    RutaFaqComponent,
    RutaNoEncontradaComponent,
    RutaPerfilComponent,
    RutaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    Router.Module.forRoot(ARREGLO_RUTAS,
    config:{
      useHash: true
    }
  )
  HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
