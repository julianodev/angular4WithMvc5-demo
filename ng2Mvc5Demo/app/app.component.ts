import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
<navbar-app></navbar-app>
<div class="container">
    <br />
    <router-outlet></router-outlet>
</div>

             `
})
export class AppComponent {

}