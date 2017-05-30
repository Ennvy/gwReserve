import { Component, OnChanges, OnInit, Input, SimpleChange} from "@angular/core";
import { RoomsService, IRoom } from "./../../services/rooms-service";

@Component({
	selector: "gw-room-header",
	templateUrl: "./room-header.component.html",
	styleUrls: ["./room-header.component.css"]
})
export class RoomHeaderComponent implements OnChanges, OnInit {
	@Input() public id: number;

	public room: IRoom;

	// ActivatedRoute is provided by RouterModule
	constructor(private roomService:RoomsService) { }

	ngOnInit() { }

	ngOnChanges(changes:{ [propKey:string]:SimpleChange }) {
		const previousValueOfId = changes.id.previousValue;
		const currentValueOfId = changes.id.currentValue;

		console.log("Previous value of id: " + previousValueOfId);
		console.log("Current value of id: " + currentValueOfId);

		this.id = currentValueOfId;

		this.roomService.getRoomById(currentValueOfId)
			.then(room => this.room = room);
	}
}
