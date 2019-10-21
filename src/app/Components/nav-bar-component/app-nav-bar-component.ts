import {IItem} from '../../Services/ToDoListService';

const appNavBarComponent = {
  template: `
    <div class="navBar">
      <app-fancy-button  btn-value="Create task" handle-click="$ctrl.createToDoTask()"></app-fancy-button>
      <app-search-field input-value="search"></app-search-field>
      <app-fancy-button  btn-value="All done tasks" handle-click="$ctrl.getAllDoneTasks()"></app-fancy-button>
      <app-fancy-button  btn-value="Tasks in work" handle-click="$ctrl.getAllWorkTasks()"></app-fancy-button>
      <app-fancy-button  btn-value="Sort by title down" handle-click="$ctrl.sortByDateDown()"></app-fancy-button>
      <app-fancy-button  btn-value="Sort by title up" handle-click="$ctrl.sortByDateUp()"></app-fancy-button>
    </div>`,

  controller: class AppNavBarController {
    ToDoListService: any;
    ModalService: any;
    todoItems: IItem[];


    constructor(ToDoListService, ModalService) {
      this.ToDoListService = ToDoListService;
      this.ModalService = ModalService;
      this.todoItems = this.ToDoListService.getTodoItems();
    }

    createToDoTask(): void {
      console.log('new task');
      this.ModalService.showModalCreateCard();
    }

    getAllDoneTasks(): void {
      console.log('done tasks', this.ToDoListService.getAllDoneTasks());
      this.ToDoListService.getAllDoneTasks();
    }
    getAllWorkTasks(): void {
      console.log('done tasks', this.ToDoListService.getAllWorkTasks());
      this.ToDoListService.getAllWorkTasks();
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

export { appNavBarComponent };

//
// Обработка строк (связывание текста и атрибутов)
// Во время компиляции компилятор сканирует текст и атрибуты,
//   используя сервис $interpolate для того чтобы узнать,
//   содержат ли они встроенные выражения.
//   Эти выражения регистрируются как наблюдаемые и будут обновлены в цикле digest.
//   Пример обработки строк:
