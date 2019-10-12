import * as angular from 'angular';
import * as moment from 'moment';
import {IItem} from '../../Services/ToDoListService';

const appModalCreateCardComponent = {
  controller: class AppCreateCardController {
    newToDoDate: string;
    newToDoTitle: string;
    newToDoTask: string;
    ToDoListService: any;
    todoItems: IItem[];
    isShowModalCreateCard: boolean;

    constructor(ToDoListService) {
      this.newToDoTask = '';
      this.newToDoTitle = '';
      this.newToDoDate = '';
      this.ToDoListService = ToDoListService;
      this.isShowModalCreateCard = this.ToDoListService.isShowModalCreateCard;

      this.todoItems = this.ToDoListService.getTodoItems();
    }

    addItem(): void {
      console.log('this create card', this);

      this.todoItems.push({
        id: this.setId(),
        description: this.newToDoTask,
        finished: false,
        date: moment(this.newToDoDate).format('YYYY-DD-MM'),
        title: this.newToDoTitle
      })
      this.clearAddInput();
      this.ToDoListService.hideModalCreateCard();
    }

    setId(): any {
      return new Date().getTime();
    }
    clearAddInput(): void {
      this.newToDoTask = '';
      this.newToDoDate = '';
      this.newToDoTitle = '';
    }

    cancelToAddNewTask(): void {
      this.clearAddInput();
      this.ToDoListService.hideModalCreateCard();
    }
  },
  template: `
<div class="modalWrapper" ng-show="$ctrl.ToDoListService.isShowModalCreateCard">
  <div id="newTask">
  <h1>New task</h1>

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

    <div class='btnGroup'>
      <app-fancy-button
        btn-value="Add"
        handle-click="$ctrl.addItem()">
      </app-fancy-button>
    
      <app-fancy-button
        btn-value="Cancel"
        handle-click="$ctrl.cancelToAddNewTask()">
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

export { appModalCreateCardComponent };
