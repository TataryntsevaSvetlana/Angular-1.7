import { IItem } from '../../Services/ToDoListService';

class AppCreateCardController {
  newToDoDate: string;
  newToDoTitle: string;
  newToDoTask: string;
  ToDoListService: any;
  todoItems: IItem[];


  constructor(ToDoListService) {
    this.newToDoTask = '';
    this.newToDoTitle = 'Work';
    this.ToDoListService = ToDoListService;

    this.todoItems = this.ToDoListService.getTodoItems();
  }

  addItem(): any {

    this.clearAddInput();
  }


  clearAddInput(): void {
    this.newToDoTask = '';
    this.newToDoDate = '';
    this.newToDoTitle = '';
  }
}
export { AppCreateCardController };
