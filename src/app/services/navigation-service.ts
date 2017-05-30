import { Injectable } from "@angular/core";

@Injectable()
export class NavigationService {
	private navigationItems:INavigationItem[] = [];

	public getNavigation() {
		return this.navigationItems;
	}

	public addNavigationItem(item:INavigationItem) {
		this.navigationItems.push(item);
	}
}

export interface INavigationItem {
	title: string,
	url: string,
	color: string;
}
