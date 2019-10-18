import * as angular from 'angular';
import * as moment from 'moment';
import {IItem} from '../../Services/ToDoListService';

const appModalEditTaskComponent = {
  controller: class AppEditTaskController {
    newToDoTask: string;
    ToDoListService: any;
    ModalService: any;


    constructor(ToDoListService, ModalService) {
      this.ToDoListService = ToDoListService;
      this.ModalService = ModalService;
      console.log('app modal edit task this:', this);
    }

    clearAddInput(): void {
      console.log('clear input');
      this.ModalService.item.description = '';
    }

    saveEditableItem(itemWithNewDescription): void {
      console.log('save editable object', itemWithNewDescription);
      this.ToDoListService.saveEditableItem(itemWithNewDescription);
      this.ModalService.hideModalEditTask();
      this.clearAddInput();
    }

    cancelToEditTask(): void {
      console.log('cancelToEditTask');
      this.clearAddInput();
      this.ModalService.hideModalEditTask();
    }
  },
  template: `
<div class="modalWrapper" ng-show="$ctrl.ModalService.isShowModalEditTask">
  <div id="newTask">
  <h1>Edit task</h1>

    <div>
      <label class="label" for="description">Description:</label>
      <app-textarea-field
        id="description"
        value="$ctrl.ModalService.item.description"
      ></app-textarea-field>
    </div>
    <div class='btnGroup'>
      <app-fancy-button 
         btn-value="Save" 
         handle-click="$ctrl.saveEditableItem($ctrl.ModalService.item)">  
      </app-fancy-button>
      
      <app-fancy-button
        btn-value="Cancel"
        handle-click="$ctrl.cancelToEditTask()">
      </app-fancy-button>
    </div>
  </div>
</div>`,
  //
  // bindings: {
  //   editableItemId: '=',
  //   item: '=',
  //   editTask: '&',
  //   changeStatus: '&',
  //   saveEditableItem: '&',
  // },
};

export { appModalEditTaskComponent };
