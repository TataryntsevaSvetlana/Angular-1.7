import {IItem} from '../../Services/ToDoListService';

const appTasksListComponent = {

  template: `
    <ul class="tasksListComponent">
      <li class="list-item" ng-repeat="item in $ctrl.todoItems" ng-if="!item.finished">
        <app-task-item-component
          item="item"
          editable-item-id="$ctrl.editableItemId"
          set-editable-item-id="$ctrl.setEditableItemId(item.id)"
          change-status="$ctrl.changeStatus(item.id)"
          
          save-editable-item="$ctrl.saveEditableItem(id, newDescription)"
        ></app-task-item-component>
      </li>
    </ul>`,

  controller: class AppTasksListController {
    ToDoListService: any;
    todoItems: IItem[];
    editableItemId: any;
    newEditableDescription: string;

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
      this.editableItemId = id;
    }

    saveEditableItem = (id, newDescription): void => {
      console.log('id', id);
      console.log('newDescription', newDescription);
      this.ToDoListService.saveEditableItem(id, newDescription);
      this.editableItemId = null;
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

//
// Обработка строк (связывание текста и атрибутов)
// Во время компиляции компилятор сканирует текст и атрибуты,
//   используя сервис $interpolate для того чтобы узнать,
//   содержат ли они встроенные выражения.
//   Эти выражения регистрируются как наблюдаемые и будут обновлены в цикле digest.
//   Пример обработки строк:
