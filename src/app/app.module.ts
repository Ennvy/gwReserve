import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router"

import { AppComponent } from "./app.component";
import { ExercisesComponent } from "./exercises/exercises.component";
import { LoginComponent } from "./login/login.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { RoomsComponent } from "./rooms/rooms.component";

@NgModule({
	declarations: [
		AppComponent,
		ExercisesComponent,
		LoginComponent,
		NavigationComponent,
		RoomsComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule.forRoot([
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
		])
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
