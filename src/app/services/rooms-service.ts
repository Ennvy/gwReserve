import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { ApplicationSettings } from "./application-settings.service";
import { LoginService } from "./login-service.service";

import "rxjs/add/operator/toPromise"

@Injectable()
export class RoomsService {
	constructor(
		private applicationSettings:ApplicationSettings,
		private loginService:LoginService,
		private http:Http
	) { }

	getRoomById(id):Promise<IRoom> {
		return this.http.get(this.applicationSettings.getFirebaseRestUrl(`rooms/${id}`)).toPromise()
			.then(response => {
				const room = response.json();
				room.id = id;

				return room;
			});
	}

	fetchRoomsFromDB():Promise<IRoom[]> {
		return this.http.get(this.applicationSettings.getFirebaseRestUrl("rooms")).toPromise()
			.then(response => response.json())
			.then(rooms => {
				for(let roomKey in rooms) {
					rooms[roomKey].id = roomKey;
				}

				return rooms;
			});
	}

	resetRoomsToDB():Promise<IRoom[]> {
		const url = this.applicationSettings.getFirebaseRestUrl("rooms");

		return this.http.delete(url).toPromise()
			.then(() => {
				return this.http.put(url, {
					halo: {
						name: "Halo",
						picture: 'halo.jpg'
					},
					sonic: {
						name: "Sonic",
						picture: 'sonic.jpg'
					},
					zelda: {
						name: "Zelda",
						picture: 'zelda.jpg'
					},
					starfox: {
						name: "Star Fox",
						picture: 'starfox.jpg'
					},
					simcity: {
						name: "Sim City",
						picture: 'simcity.jpg'
					}
				});
			})
			.then(this.fetchRoomsFromDB);
	}

	writeRoomReservation(id, reservation) {
		return this.getRoomById(id)
			.then(room => {
				// we get room so some validation could be performed here before we post, though note this doesn't eliminate race conditions
				return this.http.post(this.getRoomReservationsUrl(id, reservation.startTime), reservation);
			});
	}

	deleteRoomReservation(id, reservation) {
		if (reservation.email.toLowerCase() !== this.loginService.getLoggedInUser().email.toLowerCase()) {
			alert("You may not delete this reservation because you don't own it");
			return;
		}

		const url = this.getRoomReservationsUrl(id, reservation.startTime, reservation.id);

		return this.http.delete(url);
	}

	getRoomDateKey(date = null):string {
		let dateKey = date
			? new Date(date).toDateString()
			: new Date().toDateString();

		dateKey = dateKey.replace(/ /g, "");

		return dateKey;
	}

	getRoomReservationsUrl(id, date = null, reservation_id = ""):string {
		return this.applicationSettings.getFirebaseRestUrl(`rooms/${id}/reservations/${this.getRoomDateKey(date)}/${reservation_id}`);
	}
}

export interface IRoom {
	id:string;
	name:string;
	picture:string;
	color?:string
}
