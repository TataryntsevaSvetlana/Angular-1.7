import { IItem } from '../../Services/ToDoListService';

class AppTasksListController {
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
    return this.ToDoListService.changeStatus(id);
  }

  editTask(id: number) {
    console.log(id);
    return this.ToDoListService.editTask(id);
  }

  saveEditableItem = (id: number, description: string): void => {
    return this.ToDoListService.saveEditableItem(id, description);
  }
}
export { AppTasksListController };
