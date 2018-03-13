import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FechaComponent } from './fecha/fecha.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { MnoarchivoComponent } from './mnoarchivo/mnoarchivo.component';


@NgModule({
  declarations: [
    AppComponent,
    FechaComponent,
    ImagenesComponent,
    MnoarchivoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
