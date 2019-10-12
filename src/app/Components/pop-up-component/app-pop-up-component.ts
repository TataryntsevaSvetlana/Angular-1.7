import * as angular from 'angular';
import * as moment from 'moment';
import {IItem} from '../../Services/ToDoListService';

const appPopUpComponent = {
  controller: class AppPopUpController {
    ToDoListService: any;
    todoItems: IItem[];


    constructor(ToDoListService) {
      this.ToDoListService = ToDoListService;

      this.todoItems = this.ToDoListService.getTodoItems();
    }

    addItem(): void {
    }

    setId(): any {
    }
    clearAddInput(): void {
    }
  },
  template: `
  <div class="componentCard">
  <div id="newTask">

    <div>
      <label class="label" for="title">Title:</label>
      <select
        id='title'
        ng-model='$ctrl.newToDoTitle'>
        <option value="Home">Home</option>
        <option value="Work">Work</option>
        <option value="Studies">Studies</option>
        <option value="Family">Family</option>
        <option value="Friends">Friends</option>
        <option value="Health">Health</option>
      </select>
    </div>

    <div>
      <label class="label" for="date">Date:</label>
      <input id='date' ng-model='$ctrl.newToDoDate' type="date" class="dateInput">
    </div>

    <div>
      <label class="label" for="description">Description:</label>
      <app-textarea-field
        id="description"
        value="$ctrl.newToDoTask"
      ></app-textarea-field>
    </div>

    <div>
      <app-fancy-button
        btn-value="Add"
        handle-click="$ctrl.addItem()">
      </app-fancy-button>
    </div>

  </div>
</div>`,

  bindings: {
    editableItemId: '=',
    item: '=',
    editTask: '&',
    changeStatus: '&',
    saveEditableItem: '=',
  },
};

export { appPopUpComponent };
