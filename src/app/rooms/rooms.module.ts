import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RoomsRoutingModule, routedComponents } from "./rooms.routing.module";

@NgModule({
	imports: [ CommonModule, RoomsRoutingModule ],
	declarations: [
		routedComponents
	]
})
export class RoomsModule { }