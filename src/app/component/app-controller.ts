interface IItem {
  id: number;
  description: string;
  finished: boolean;
}

class AppController {
  name: string;
  todoItems: IItem[];

  constructor() {
    this.name = 'Solnishko';
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

  changeName(): void {
    this.name = 'Telenok';
  }

  findItem(id: number, arr: IItem[]): IItem {
    return arr.find((el): IItem => {
     if (el.id === id) {
       return el;
     }
    });
  }

  changeStatus(id: number): void {
    const findItem = this.findItem(id, this.todoItems);
    findItem.finished = true;
  }

  toAddItem(item: any): void{
    console.log(item);

  }

}
export { AppController };
