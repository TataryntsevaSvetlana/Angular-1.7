import * as angular from 'angular';
import * as moment from 'moment';
import {IItem} from '../../Services/ToDoListService';

const appAboutComponent = {
  controller: class AppAboutController {
    ToDoListService: any;
    inputUserName: string;

    constructor(ToDoListService) {
      this.ToDoListService = ToDoListService;
    }

    setUserName(inputUserName): void {
      this.ToDoListService.setUserName(inputUserName);
    }
  },
  template: `
  <div class="about">
  <label for="inputUserNameField">Please, enter your name:</label>
  <input id="inputUserNameField" ng-blur="$ctrl.setUserName($ctrl.inputUserName)"
      ng-model='$ctrl.inputUserName'>
  </div>`,
};

export { appAboutComponent };
