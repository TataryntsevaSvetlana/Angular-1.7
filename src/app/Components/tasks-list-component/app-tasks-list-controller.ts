import { IItem } from '../../Services/ToDoListService';

class AppTasksListController {
  editableItemId: number;
  newToDoDescription: string;
  newToDoDate: string;
  newToDoTitle: string;
  ToDoListService: any;
  todoItems: IItem[];

  constructor(ToDoListService) {
    this.ToDoListService = ToDoListService;

    this.todoItems = this.ToDoListService.getTodoItems();
  }

  getQuantityActiveItems(): number {
    return this.ToDoListService.getQuantityActiveItemsS();
  }

  changeStatus(id: number): void {
    return this.ToDoListService.changeStatusS(id);
  }

  editTask(id: number) {
    return this.ToDoListService.editTaskS(id);
  }

  saveEditableItem = (id: number, description: string): void => {
    return this.ToDoListService.saveEditableItemS(id, description);
  }
}
export { AppTasksListController };
