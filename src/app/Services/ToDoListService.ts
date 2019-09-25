interface IItem {
  id: number;
  description: string;
  finished: boolean;
  date: string;
  title: string;
}


class ToDoListService {
  items: IItem[];

  constructor() {
    this.items = [
      {
        id: 1,
        description: 'to eat',
        finished: false,
        date: 'Wed Sep 25 2019 20:37:56 GMT+0300 (Eastern European Summer Time)',
        title: 'Home'
      }, {
        id: 2,
        description: 'to sleep',
        finished: false,
        date: 'Wed Sep 25 2019 20:37:56 GMT+0300 (Eastern European Summer Time)',
        title: 'Home'
      }, {
        id: 3,
        description: 'to work',
        finished: false,
        date: 'Wed Sep 25 2019 20:37:56 GMT+0300 (Eastern European Summer Time)',
        title: 'Work'
      }, {
        id: 4,
        description: 'to learn Angular JS',
        finished: false,
        date: 'Wed Sep 25 2019 20:37:56 GMT+0300 (Eastern European Summer Time)',
        title: 'Studies'
      }, {
        id: 5,
        description: 'to meet with friends',
        finished: false,
        date: 'Wed Sep 25 2019 20:37:56 GMT+0300 (Eastern European Summer Time)',
        title: 'Friends'
      }
    ];
  }

  getTodoItems(): IItem[] {
    return this.items;
  }

  addItem(obj: IItem): void {
    this.items.push(obj);
  }

  findItem(id: number, arr: IItem[]): IItem {
    return arr.find(el => el.id === id);
  }

  getTotalLength(): number {
    return this.items.length;
  }

  getQuantityActiveItems(): number {
    return this.items.reduce((acc: number, item: IItem) => {
      if (item.finished !== false) {
        acc = acc - 1;
      }
      return acc;
    }, this.getTotalLength());
  }

  changeStatus(id: number): void {
    const foundItem = this.findItem(id, this.items);

    foundItem.finished = true;
  }

  saveEditableItem(id: number): void  {
    const itemToUpdate = this.findItem(id, this.items);

    console.log(itemToUpdate.description);
  }

  sortByDateDown(): void {
      this.items.sort((a, b) => {
      return a.date > b.date ? 1 : -1;
    });
  }
  sortByDateUp(): void {

    this.items.sort((a, b) => {
      return a.date < b.date ? 1 : -1;
    });
  }

}


export { ToDoListService, IItem };
