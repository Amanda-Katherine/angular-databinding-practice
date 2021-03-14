import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = ""
  usernameExists = false

  
  //check if username exists or is empty
  checkUsername =
    !!this.username ? true : false 

  onUsernameInput(event: Event) {
    this.username = (<HTMLInputElement>event.target).value

    if (!!this.username) {
      this.usernameExists = true
    } else {
      this.usernameExists = false
    }
  }

  resetUsername() {
    this.username = ""
  }
}
