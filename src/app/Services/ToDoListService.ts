import * as moment from '../Components/modals-components/app-modal-edit-task-component';

interface IItem {
  id: number;
  description: string;
  finished: boolean;
  date: string;
  title: string;
}


class ToDoListService {
  items: IItem[];
  isShowModalCreateCard: boolean;
  inputUserName: string;
  isShowModalEditTask: boolean;
  itemWithNewDescription: IItem;
  newEditableDescription: string;

  constructor() {
    this.isShowModalCreateCard = false;
    this.isShowModalEditTask = false;
    this.items = [
      {
        id: 1,
        description: 'to eat',
        finished: false,
        date: '2019-03-14',
        title: 'Home'
      }, {
        id: 2,
        description: 'to sleep',
        finished: false,
        date: '2019-05-02',
        title: 'Home'
      }, {
        id: 3,
        description: 'to work',
        finished: false,
        date: '2019-08-11',
        title: 'Work'
      }, {
        id: 4,
        description: 'to learn Angular JS',
        finished: false,
        date: '2019-07-30',
        title: 'Studies'
      }, {
        id: 5,
        description: 'to meet with friends',
        finished: false,
        date: '2019-02-27',
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

  saveEditableItem(itemWithNewDescription): void {
    this.itemWithNewDescription = itemWithNewDescription;
    const foundItem = this.findItem(itemWithNewDescription.id, this.items);
    foundItem.description = itemWithNewDescription.newDescription;
    this.newEditableDescription = foundItem.description;
    this.itemWithNewDescription = null;

    console.log(this.items);
  }

  getAllDoneTasks(): number {
    return this.items.reduce((acc: number, item: IItem) => {
      if (item.finished === true) {
        acc = acc + 1;
      }
      return acc;
    }, 0);
  }

  changeStatus(id: number): void {
    const foundItem = this.findItem(id, this.items);
    foundItem.finished = true;
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

  setUserName(userName): void {
    this.inputUserName = userName;
  }

  getUserName(): string {
    return this.inputUserName;
  }
}


export { ToDoListService, IItem };
