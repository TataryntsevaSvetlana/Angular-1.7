interface IItem {
  id: any;
  description: string;
  finished: boolean;
}

class AppController {
  todoItems: IItem[];
  newToDoDescription: string;
  quantityActiveItems: number;

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

  changeQuantityActiveItems(): void {

    this.todoItems.reduce((acc: number, item: IItem) => {
      if (item.finished !== false) {
        return acc = acc++;
      };

      console.log(item, 'item');
    }, 0);

    //
    // console.log('this.todoItems.length', this.todoItems.length);

  }


  findItem(id: number, arr: IItem[]): IItem {
    return arr.find(el => el.id === id);
  }

  changeStatus(id: number): void {
    const findItem = this.findItem(id, this.todoItems);
    findItem.finished = true;

    this.changeQuantityActiveItems();
  }

  toAddItem(): void {
    const idTask: string = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
    this.todoItems.push( {id: idTask, description: this.newToDoDescription, finished: false} );

    this.clearInput();
    this.changeQuantityActiveItems();

  }

  clearInput(): void {
    this.newToDoDescription = '';
  }

}
export { AppController };
