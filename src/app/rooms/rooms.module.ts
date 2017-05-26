import { NgModule } from "@angular/core";
import { RoomsRoutingModule, routedComponents } from "./rooms.routing.module";

@NgModule({
	imports: [ RoomsRoutingModule ],
	declarations: routedComponents
})
export class RoomsModule { }