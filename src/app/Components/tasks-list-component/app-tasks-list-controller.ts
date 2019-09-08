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
    return this.ToDoListService.getTodoItems().reduce((acc: number, item: IItem) => {
      if (item.finished !== false) {
        acc = acc - 1;
      }
      return acc;
    }, this.ToDoListService.getTotalLength());
  }

  changeStatus(id: number): void {
    const findItem = this.ToDoListService.findItem(id, this.ToDoListService);
    findItem.finished = true;
    console.log('this.todoItems after change status', this.ToDoListService);
  }

  editTask(id: number) {
    this.editableItemId = id;
  }

  saveEditableItem = (id: number, description: string): void => {
    const itemToUpdate = this.ToDoListService.findItem(id, this.ToDoListService);

    itemToUpdate.description = description;
    this.editableItemId = undefined;
  }
}
export { AppTasksListController };
