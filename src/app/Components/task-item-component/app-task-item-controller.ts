import { IItem } from '../../Services/ToDoListService';

class AppTaskItemController {
  newDescription: string;
  ToDoListService: any;
  todoItems: IItem[];
  item: any;

  constructor(ToDoListService) {
    this.ToDoListService = ToDoListService;
    this.todoItems = this.ToDoListService.getTodoItems();

  }

  editTask(id): void {
    console.log(123,id);
  }
}
export { AppTaskItemController };
