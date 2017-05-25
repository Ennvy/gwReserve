import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ExercisesComponent } from "./exercises/exercises.component";
import { LoginComponent } from "./login/login.component";
import { RoomsComponent } from "./rooms/rooms.component";

// please note our Route interface provided by Angular team:
// export interface Route {
// 	path?: string;
// 	pathMatch?: string;
// 	matcher?: UrlMatcher;
// 	component?: Type<any>;
// 	redirectTo?: string;
// 	outlet?: string;
// 	canActivate?: any[];
// 	canActivateChild?: any[];
// 	canDeactivate?: any[];
// 	canLoad?: any[];
// 	data?: Data;
// 	resolve?: ResolveData;
// 	children?: Routes;
// 	loadChildren?: LoadChildren;
// 	runGuardsAndResolvers?: RunGuardsAndResolvers;
// }

const routes: Routes = [
	// let's add our "root" route
	{
		path: "",
		component: LoginComponent
	},

	// add specific routes
	{
		path: "exercises",
		component: ExercisesComponent
	},
	{
		path: "login",
		component: LoginComponent
	},
	{
		path: "rooms/:id",
		component: RoomsComponent
	},

	// finally, add "catch-all" route, taking the place of "otherwise" from legacy Angular
	{
		path: "**",
		pathMatch: "full",
		redirectTo: "login"
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }

export const routedComponents = [
	ExercisesComponent,
	LoginComponent,
	RoomsComponent
];
