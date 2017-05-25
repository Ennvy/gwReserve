import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule, routedComponents } from "./app.routing.module";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";

@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent,
		routedComponents
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
