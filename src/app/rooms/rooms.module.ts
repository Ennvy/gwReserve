import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RoomsRoutingModule, routedComponents } from "./rooms.routing.module";

import { RoomHeaderComponent } from "./room-header/room-header.component";

@NgModule({
	imports: [ CommonModule, RoomsRoutingModule ],
	declarations: [
		routedComponents,
		RoomHeaderComponent
	]
})
export class RoomsModule { }