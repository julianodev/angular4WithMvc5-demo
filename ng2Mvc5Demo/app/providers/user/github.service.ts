import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IUser } from "../../model/user";


@Injectable()
export class GithubService {

    constructor(private http: Http) {
        console.log('providers');
    }


    getUsers(): Observable<any> {

        let urlBase = 'https://api.github.com';

        return this.http.get(`${urlBase}/users`)
            .map((response: Response) => {
                return response.json() as IUser;
            });
    }
}