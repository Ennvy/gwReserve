import { Injectable } from "@angular/core";
import { IRoom } from "./../interfaces/IRoom";

@Injectable()
export class RoomsService {
	public rooms: IRoom[];

	constructor() {
		this.rooms = [
			{
				name: "Halo",
				picture: 'halo.jpg'
			},
			{
				name: "Sonic",
				picture: 'sonic.jpg'
			},
			{
				name: "Zelda",
				picture: 'zelda.jpg'
			},
			{
				name: "Star Fox",
				picture: 'starfox.jpg'
			},
			{
				name: "Sim City",
				picture: 'simcity.jpg'
			}
		]
	}
}