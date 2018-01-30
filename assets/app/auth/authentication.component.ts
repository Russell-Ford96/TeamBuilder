import { Component } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-authentication',
    template: `
        <header class="row spacing">
            <div class="row spacing">
                <router-outlet></router-outlet>
            </div>
            <nav class="col-md-8 col-md-offset-2">
               
                    <p routerLinkActive="active"><a [routerLink]="['signup']">Signup</a></p>
                    <p routerLinkActive="active" ><a [routerLink]="['signin']">Signin</a></p>
                    
                
            </nav>
        </header>
        
    `
})
export class AuthenticationComponent {
    constructor(private authService: AuthService) {}

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}