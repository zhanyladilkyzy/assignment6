import {Shared} from "../shared";
import {Injectable} from "@angular/core";
import {LoggingService} from "./logging.service";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
      private loggingService: LoggingService) {
    }

    getValues() {
      let valueList:Shared[];
      valueList=[
        new Shared(1, 'Mark', 25),
        new Shared(2, 'Tom', 50),
        new Shared(3, 'Bob', 40)
      ];

      this.loggingService.log('List of users: ' + valueList);

      return valueList;
  }
}
