import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'navbar-app',
    templateUrl : './app/components/navbar/navbar.component.html'
})


export class NavbarComponent {

    about_mvc: string = "home/about";
    titulo: string = "Angular com MVC 5";
    nome: string = "Lucas Juliano";

}