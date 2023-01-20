import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from './componentes/main/main.component';
import { HeardComponent } from './componentes/heard/heard.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { BodyComponent } from './componentes/body/body.component';
import { PinturaComponent } from './componentes/pintura/pintura.component';
import { dataApiServices } from './componentes/dataApi.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeardComponent,
    FooterComponent,
    BodyComponent,
    PinturaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    dataApiServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
