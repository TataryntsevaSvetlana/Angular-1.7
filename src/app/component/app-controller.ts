interface IItem {
  id: number;
  description: string;
  finished: boolean;
}

class AppController {
  todoItems: IItem[];
  editableItemId: number;
  newToDoDescription: string;
  newEditableDescription: string;

  constructor() {
    this.todoItems = [
      {
        id: 1,
        description: 'to eat',
        finished: false,
      }, {
        id: 2,
        description: 'to sleep',
        finished: false,
      }, {
        id: 3,
        description: 'to work',
        finished: false,
      }
    ];

  }

  getQuantityActiveItems(): number {
    return this.todoItems.reduce((acc: number, item: IItem) => {
      if (item.finished !== false) {
        acc = acc - 1;
      }
      return acc;
    }, this.todoItems.length);
  }

  findItem(id: number, arr: IItem[]): IItem {
    return arr.find(el => el.id === id);
  }

  changeStatus(id: number): void {
    const findItem = this.findItem(id, this.todoItems);
    findItem.finished = true;
  }

  toAddItem(): void {
    const idTask: number = Date.now();
    this.todoItems.push( {id: idTask, description: this.newToDoDescription, finished: false} );

    this.clearAddInput();
  }

  clearAddInput(): void {
    this.newToDoDescription = '';
  }

  editTask(id: number) {
    this.editableItemId = id;
  }

  saveEditableItem(id: number): void {
    const findItem = this.findItem(id, this.todoItems);
    findItem.description = this.newEditableDescription;

    this.clearEditableInput();
    this.editableItemId = 0;
  }

  clearEditableInput(): void {
    this.newEditableDescription = '';
  }
}
export { AppController };
