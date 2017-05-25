import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Component({
	selector: "app-rooms",
	templateUrl: "./rooms.component.html",
	styleUrls: ["./rooms.component.css"]
})
export class RoomsComponent implements OnInit {
	public id: number;

	// ActivatedRoute is provided by RouterModule
	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		console.log("ActivatedRoute snapshot", this.route.snapshot.params);

		// get a snapshot
		this.id = parseInt(this.route.snapshot.params["id"]);

		console.log("Room ID is ", this.id, " via snapshot");

		// deploy an observable
		this.route.params
			.map(params => {
				console.log("Before map", params);
				return params["id"];
			})
			.do(params => {
				console.log("After map", params);
			})
			.subscribe(id => {
				this.id = parseInt(id);
				console.log("Room ID is ", this.id, " via subscribe");
			});
	}
}
