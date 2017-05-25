import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

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
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
