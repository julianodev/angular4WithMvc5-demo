import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'about-app',
    template: `
    <h1>Olá, {{nome}} seja bem vindo ao angular 4 :)</h1>
  `
})


export class HomeComponent {

    nome: string = "Lucas Juliano";

    constructor() {
        
    }

}