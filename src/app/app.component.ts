import { Component } from '@angular/core';
import '../../public/css/styles.scss';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [require('./app.component.scss').toString()]
})
export class AppComponent { }
