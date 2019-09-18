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
}
export { AppTaskItemController };
