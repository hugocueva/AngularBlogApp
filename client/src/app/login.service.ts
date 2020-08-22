import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User  } from "./models/user.model";

@Injectable({
    providedIn: 'root'
})
export class LoginService{
    constructor(private http: HttpClient) { 
        
    }

    validateLogin(user: User){
         return this.http.post('http://localhost:3000/api/user/login', { 
            username: user.username, 
            password: user.password
        });
    }
}