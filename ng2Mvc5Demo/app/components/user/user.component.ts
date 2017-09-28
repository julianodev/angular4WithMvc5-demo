import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { GithubService } from "../../providers/user/github.service"
import 'rxjs/add/operator/take';
import {IUser} from "../../model/user";


@Component({
    selector: 'about-app',
    templateUrl: './app/components/user/user.component.html'
})


export class UserComponent implements OnInit {

    users: IUser;

    constructor(private githubService: GithubService) {

    }

    ngOnInit(): void {
        this.githubService.getUsers().take(10)
            .subscribe((users: IUser) => {

                this.users = users;
                console.log('users =>', users);
            });
    }



}