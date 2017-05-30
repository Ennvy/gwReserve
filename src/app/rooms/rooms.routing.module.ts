import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { RoomsComponent } from "./rooms.component";
import { RoomFormComponent } from "./room-form/room-form.component";
import { RoomListComponent } from "./room-list/room-list.component";

import { LoginGuard } from "./../services/login-guard.service";
import { DirtyFormGuard } from "./../services/dirty-form-guard.service";

const routes:Routes = [
	{
		path: "rooms/:id",
		component: RoomsComponent,
		canActivate: [ LoginGuard ],

		children: [
			{
				path: "form",
				component: RoomFormComponent,
				canDeactivate: [ DirtyFormGuard ]
			},
			{
				path: "list",
				component: RoomListComponent
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class RoomsRoutingModule { }

export const routedComponents = [
	RoomsComponent,
	RoomFormComponent,
	RoomListComponent
];
