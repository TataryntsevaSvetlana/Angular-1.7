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
    }

    clearAddInput(): void {
      this.ModalService.editableId = null;
      this.ModalService.editableDescription = '';
    }

    saveEditableItem(description, id): void {
      this.ToDoListService.saveEditableItem(description, id);
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
            value="$ctrl.ModalService.editableDescription"
          ></app-textarea-field>
        </div>
        <div class='btnGroup'>
          <app-fancy-button 
             btn-value="Save" 
             handle-click="$ctrl.saveEditableItem($ctrl.ModalService.editableDescription, $ctrl.ModalService.editableId)">  
          </app-fancy-button>
          
          <app-fancy-button
            btn-value="Cancel"
            handle-click="$ctrl.cancelToEditTask()">
          </app-fancy-button>
        </div>
      </div>
    </div>`,
};

export { appModalEditTaskComponent };
