import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { NgModule } from "@angular/core";

import { AppRoutingModule, routedComponents } from "./app.routing.module";
import { RoomsModule } from "./rooms/rooms.module";

import { ApplicationSettings } from "./services/application-settings.service";
import { LoginService } from "./services/login-service.service";
import { NavigationService } from "./services/navigation-service";
import { RoomsService } from "./services/rooms-service";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";

@NgModule({
	imports: [
		// vendor modules
		BrowserModule,
		CommonModule,
		FormsModule,
		HttpModule,

		// our modules
		RoomsModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		NavigationComponent,
		routedComponents
	],
	providers: [
		ApplicationSettings,
		LoginService,
		NavigationService,
		RoomsService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
