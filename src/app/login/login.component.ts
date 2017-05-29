import { Component, OnInit } from '@angular/core';
import { LoginService, IUser } from "./../services/login-service.service";

@Component({
	selector: 'gw-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public loggedInUser:IUser;

	constructor(private loginService:LoginService) { }

	ngOnInit() {
		this.init();
	}

	login() {
		this.loginService.login();
		this.init();
	}

	logout() {
		this.loginService.logout();
		this.init();
	}

	private init() {
		this.loggedInUser = this.loginService.getLoggedInUser();
		console.log(this.loggedInUser, "fetched");
	}
}
