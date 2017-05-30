import { Component, OnChanges, OnInit, Input, SimpleChange} from "@angular/core";

@Component({
	selector: "gw-room-list",
	templateUrl: "./room-list.component.html",
	styleUrls: ["./room-list.component.css"]
})
export class RoomListComponent implements OnChanges, OnInit {
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
}
