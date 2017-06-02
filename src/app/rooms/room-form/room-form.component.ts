import { Component, OnChanges, OnInit, Input, SimpleChange} from "@angular/core";
import { IDirtyCanDeactivate } from "./../../services/dirty-form-guard.service";

@Component({
	selector: "gw-room-form",
	templateUrl: "./room-form.component.html",
	styleUrls: ["./room-form.component.css"]
})
export class RoomFormComponent implements OnChanges, OnInit, IDirtyCanDeactivate {
	@Input() public id: number;

	// ActivatedRoute is provided by RouterModule
	constructor() { }

	ngOnInit() { }

	ngOnChanges(changes:{ [propKey:string]:SimpleChange }) {
		const previousValueOfId = changes.id.previousValue;
		const currentValueOfId = changes.id.currentValue;

		console.log("Previous value of id: " + previousValueOfId);
		console.log("Current value of id: " + currentValueOfId);

		this.id = currentValueOfId;
	}

	dirtyCanDeactivate() {
		return confirm("Do you want to leave?");
	}
}
