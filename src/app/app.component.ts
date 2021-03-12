import { Component } from '@angular/core';
import {SharedService} from "./services/shared.service";
import {Shared} from "./shared";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  // userService: UserService;
  valueList: Shared[];

  constructor(private sharedService: SharedService) {
    //this.userService = new UserService();
    this.valueList = [];
  }

  getValues() {
    this.valueList = this.sharedService.getValues();
  }
}
