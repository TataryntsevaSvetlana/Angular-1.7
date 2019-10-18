import * as angular from 'angular';
import * as moment from 'moment';
import {IItem} from '../../Services/ToDoListService';

const appAboutComponent = {
  controller: class AppAboutController {
    ToDoListService: any;
    todoItems: IItem[];
    inputUserName: string;


    constructor(ToDoListService) {
      this.ToDoListService = ToDoListService;
      this.todoItems = this.ToDoListService.getTodoItems();
    }

    // setUserName(): void {
    //   this.ToDoListService.setUserName(this.inputUserName);
    // }
    //
    // getUserName(): string {
    //   console.log('name from service', this.ToDoListService.getUserName())
    //   return this.inputUserName = this.ToDoListService.getUserName();
    // }

  },
  template: `
  <div class="about">
  <label for="inputUserNameField">Please, enter your name:</label>
  <input id="inputUserNameField" ng-blur=""
      ng-model='$ctrl.inputUserName'>
  </div>`,
};

export { appAboutComponent };
