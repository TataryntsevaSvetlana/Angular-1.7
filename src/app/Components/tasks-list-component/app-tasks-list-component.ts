import {IItem} from '../../Services/ToDoListService';

const appTasksListComponent = {
  template: `
<p>Количество заданий: <span>{{ getQuantityActiveItems() }}</span></p>
<ul class="tasksListComponent">
  <li class="list-item" ng-repeat="item in $ctrl.todoItems" ng-if="!item.finished">
    <app-task-item-component
      item="item"
      newValue="$ctrl.newEditableDescription"
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

    setEditableItemId(id: number) {
      console.log("AAA", id);
      return this.ToDoListService.setEditableItemId(id);
    }

    saveEditableItem = (id: number, description: string): void => {
      return this.ToDoListService.saveEditableItem(id, description);
    }
  },
};

export { appTasksListComponent };
