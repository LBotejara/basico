import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mnoarchivo',
  template: `<div class="contenedor">
                <h1>&copy; 2.018 {{empresa}}</h1>
              </div>`
})
export class MnoarchivoComponent implements OnInit {
  empresa:string = "ACME, S.A.";
  constructor() { }

  ngOnInit() {
  }

}
