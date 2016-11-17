import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styles: [require('./header.component.scss').toString()]
})
export class HeaderComponent implements OnInit {

	title = "Hello";

	constructor() { }

	ngOnInit() {
	}

}
