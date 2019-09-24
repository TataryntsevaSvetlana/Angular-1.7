import {IItem} from '../../Services/ToDoListService';

const appTasksListComponent = {


  template: `
    <p>Количество заданий: <span>{{ getQuantityActiveItems() }}</span></p>
    <ul class="tasksListComponent">
      <li class="list-item" ng-repeat="item in $ctrl.todoItems" ng-if="!item.finished">
        <app-task-item-component
          item="item"
          new-description="$ctrl.newEditableDescription"
          editable-item-id="$ctrl.editableItemId"
          set-editable-item-id="$ctrl.setEditableItemId(item.id)"
          change-status="$ctrl.changeStatus(item.id)"
          save-editable-item="$ctrl.saveEditableItem"
        ></app-task-item-component>
      </li>
    </ul>`,



  controller: class AppTasksListController {
    ToDoListService: any;
    todoItems: IItem[];
    editableItemId: number;
    newToDoDescription: string;
    newToDoDate: string;
    newToDoTitle: string;


    constructor(ToDoListService) {
      this.ToDoListService = ToDoListService;
      this.todoItems = this.ToDoListService.getTodoItems();
    }

    getQuantityActiveItems(): number {
      return this.ToDoListService.getQuantityActiveItems();
    }

    changeStatus(id: number): void {
      this.ToDoListService.changeStatus(id);
    }

    setEditableItemId(id: number, value: string): void {
      console.log('editable id: ', id);
      console.log('newToDoDescription: ', this.newToDoDescription);


      this.editableItemId = id;
      // this.showItemDescription(value);
    }

    showItemDescription(value: string): string {
      console.log(value);
      return value;
    }

    saveEditableItem = (id: number, description: string): void => {
      return this.ToDoListService.saveEditableItem(id, description);
    }
  },
};

export { appTasksListComponent };
