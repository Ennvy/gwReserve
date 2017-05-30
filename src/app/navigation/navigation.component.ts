import { Component, OnInit } from "@angular/core";
import { NavigationService, INavigationItem } from "./../services/navigation-service";
import { RoomsService } from "./../services/rooms-service";

@Component({
	selector    : "gw-navigation",
	templateUrl : "./navigation.component.html",
	styleUrls   : ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
	constructor(
		public navigationService:NavigationService,
		private roomsService:RoomsService
	) { }

	ngOnInit() {
		const exercisesItem:INavigationItem = {
			title : "Exercises",
			url   : "/exercises",
			color : "blue"
		};

		// add exercises link
		this.navigationService.addNavigationItem(exercisesItem);

		// fetch rooms
		this.roomsService.fetchRoomsFromDB().then(rooms => {
			for (let roomKey in rooms) {
				const roomItem:INavigationItem = {
					title : rooms[roomKey].name,
					url   : `/rooms/${roomKey}`,
					color : "green"
				};

				// add rooms
				this.navigationService.addNavigationItem(roomItem);
			}
		});
	}
}
