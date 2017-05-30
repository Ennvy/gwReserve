import { Injectable } from "@angular/core";

@Injectable()
export class ApplicationSettings {
	applicationTitle:string = "Geekwise Room Reserve App";

	getFirebaseRestUrl(suffix:string) {
		const prefix = "https://confdeconflictor.firebaseio.com/";
		const ext = ".json";

		return prefix + suffix + ext;
	}

	getImagePath(file:string) {
		return `www/assets/images/${file}`;
	}
}
