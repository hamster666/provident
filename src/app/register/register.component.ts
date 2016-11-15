import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  // styleUrls: ['./register.component.scss']
  // styles: [require('./register.component.scss')]
  styles: [require('./register.component.scss').toString()]

})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
