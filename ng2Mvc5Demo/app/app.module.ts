import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "./components/about/about.componet";
import { HomeComponent } from "./components/home/home.component";
import { UserComponent } from "./components/user/user.component";
import { NavbarComponent } from "./components/navbar/navbar.component";


import { GithubService } from './providers/user/github.service';


const routes: Routes =
    [
        {
            path: '',
            component: HomeComponent
        },
        {
            path: 'home',
            component: HomeComponent
        },
        {
            path: 'about',
            component: AboutComponent
        },
        {
            path: 'user',
            component: UserComponent
        }
    ]

@NgModule({
    imports:
    [
        BrowserModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        UserComponent,
        NavbarComponent
    ],
    entryComponents:
    [
        AppComponent,
        HomeComponent,
        AboutComponent,
        UserComponent,
        NavbarComponent
    ],
    providers:
    [
        GithubService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }