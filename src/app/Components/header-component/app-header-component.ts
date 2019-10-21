import * as angular from 'angular';
import * as moment from 'moment';
import {IItem} from '../../Services/ToDoListService';

const appHeaderComponent = {
  controller: class AppHeaderComponent {
    ToDoListService: any;
    inputUserName: string;

    constructor(ToDoListService) {
      this.ToDoListService = ToDoListService;
    }

    getUserName(): string {
      return this.ToDoListService.getUserName();
    }
  },
  template: `
    <header class="header">
      <div>
        <a ui-sref="about" ui-sref-active="active">
          <button class="waves-effect waves-light btn">About</button>
        </a>
        <a ui-sref="todolist" ui-sref-active="active">
          <button class="waves-effect waves-light btn">ToDoList</button>
        </a>
      </div>
          <h1>Hi, {{$ctrl.getUserName()}}!</h1>
    </header>`,
};

export { appHeaderComponent };
