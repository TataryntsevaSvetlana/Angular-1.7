import { IItem } from '../../Services/ToDoListService';

class AppTaskItemController {
  editableItemId: number;
  newDescription: string;
  ToDoListService: any;
  todoItems: IItem[];
  item: any;

  constructor(ToDoListService) {
    this.ToDoListService = ToDoListService;
    this.todoItems = this.ToDoListService.getTodoItems();

  }

  editTask(id: number): void {
    const editableItemId = this.ToDoListService.editTask(id);

  }
}
export { AppTaskItemController };
