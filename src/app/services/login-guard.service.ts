import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

import { LoginService } from "./login-service.service";

@Injectable()
export class LoginGuard implements CanActivate {
	constructor(
		private loginService:LoginService,
		private router:Router
	) { }

	canActivate() {
		const isUserLoggedIn = Boolean(this.loginService.getLoggedInUser());

		if (!isUserLoggedIn) this.router.navigate([""], { fragment: "login-needed" });

		return isUserLoggedIn;
	}
}
