import { Component } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
})

export class UserComponent  {
  name: string;
  email: string;
  bdate: string;
  phone: number;
  showId: boolean;
  constructor() {
    this.name = '';
    this.email = '';
    this.bdate = '';
    this.phone = undefined;
    this.showId = false;
  }
  formSubmit() {
    if(this.showId == false) {
      return this.showId = true;
    } else {
      return this.showId = false;
    }
  }
}
