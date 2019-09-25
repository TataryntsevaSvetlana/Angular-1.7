import {IItem} from '../../Services/ToDoListService';

const appTasksListComponent = {

  template: `
    <p>Количество заданий: <span>{{ $ctrl.getQuantityActiveItems() }}</span></p>
    <app-fancy-button  btn-value="Sort by date down" handle-click="$ctrl.sortByDateDown()"></app-fancy-button>
    <app-fancy-button  btn-value="Sort by date up" handle-click="$ctrl.sortByDateUp()"></app-fancy-button>
    
    <ul class="tasksListComponent">
      <li class="list-item" ng-repeat="item in $ctrl.todoItems" ng-if="!item.finished">
        <app-task-item-component
          item="item"
          editable-item-id="$ctrl.editableItemId"
          set-editable-item-id="$ctrl.setEditableItemId(item.id)"
          change-status="$ctrl.changeStatus(item.id)"
          save-editable-item="$ctrl.saveEditableItem(item)"
        ></app-task-item-component>
      </li>
    </ul>`,

  controller: class AppTasksListController {
    ToDoListService: any;
    todoItems: IItem[];
    editableItemId: any;

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

    setEditableItemId(id: number): void {
      console.log('editable id: ', id);
      this.editableItemId = id;
    }

    saveEditableItem(item: IItem): void {
      console.log(item);
      this.editableItemId = '';
    }

    sortByDateDown(): void {
      console.log('down');
      this.ToDoListService.sortByDateDown();
    }
    sortByDateUp(): void {
      console.log('up');
      this.ToDoListService.sortByDateUp();
    }
  },
};

export { appTasksListComponent };
