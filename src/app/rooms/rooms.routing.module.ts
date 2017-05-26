import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { RoomsComponent } from "./rooms.component";

import { LoginGuard } from "./../services/login-guard.service";
import { DirtyFormGuard } from "./../services/dirty-form-guard.service";

const routes:Routes = [
	{
		path: "rooms/:id",
		component: RoomsComponent,
		canActivate: [ LoginGuard ],
		canDeactivate: [ DirtyFormGuard ],
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class RoomsRoutingModule { }

export const routedComponents = [
	RoomsComponent
];
