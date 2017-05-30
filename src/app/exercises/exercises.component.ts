import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "gw-exercises",
	templateUrl: "./exercises.component.html",
	styleUrls: ["./exercises.component.css"]
})
export class ExercisesComponent implements OnInit {
	public loginNeeded: boolean;

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.fragment.subscribe(fragment => this.loginNeeded = fragment === "login-needed");
	}
}
