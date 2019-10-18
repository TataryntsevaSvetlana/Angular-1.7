import {IItem} from '../../Services/ToDoListService';

const appTasksListComponent = {

  template: `
    <ul class="tasksListComponent">
      <li class="list-item" ng-repeat="item in $ctrl.todoItems" ng-if="!item.finished">
        <app-task-item-component
          item="item"
          editable-item-id="$ctrl.editableItemId"
          set-editable-item-id="$ctrl.setEditableItemId(item)"
          change-status="$ctrl.changeStatus(item.id)"
          save-editable-item="$ctrl.newEditableDescription"
        ></app-task-item-component>
      </li>
    </ul>`,

  controller: class AppTasksListController {
    ToDoListService: any;
    ModalService: any;
    todoItems: IItem[];
    newEditableDescription: string;


    constructor(ToDoListService, ModalService) {
      this.ToDoListService = ToDoListService;
      this.ModalService = ModalService;
      this.todoItems = this.ToDoListService.getTodoItems();
      this.newEditableDescription = this.ToDoListService.newEditableDescription;
    }

    getQuantityActiveItems(): number {
      return this.ToDoListService.getQuantityActiveItems();
    }

    changeStatus(id: number): void {
      this.ToDoListService.changeStatus(id);
    }

    setEditableItemId(item: IItem): void {
      this.ModalService.showModalEditTask(item);
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
