import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule, routedComponents } from "./app.routing.module";
import { RoomsModule } from "./rooms/rooms.module";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";

import { LoginService } from "./services/login-service.service";

@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent,
		routedComponents
	],
	imports: [
		// vendor modules
		BrowserModule,
		FormsModule,

		// our modules
		RoomsModule,
		AppRoutingModule
	],
	providers: [
		LoginService
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
