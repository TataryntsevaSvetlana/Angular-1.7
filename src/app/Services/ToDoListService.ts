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
  newEditableDescription: string;
  doneTasksList: boolean;

  constructor() {
    this.isShowModalCreateCard = false;
    this.isShowModalEditTask = false;
    this.doneTasksList = false;
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

  public getTodoItems(): IItem[] {
    return this.items;
  }

  public addItem(obj: IItem): void {
    this.items.push(obj);
  }

  private findItem(id: number, arr: IItem[]): IItem {
    return arr.find(el => el.id === id);
  }

  private getTotalLength(): number {
    return this.items.length;
  }

  public getQuantityActiveItems(): number {
    return this.items.reduce((acc: number, item: IItem) => {
      if (item.finished !== false) {
        acc = acc - 1;
      }
      return acc;
    }, this.getTotalLength());
  }

  public saveEditableItem(description, id): void {
    const foundItem = this.findItem(id, this.items);
    foundItem.description = description;
  }

  public getAllWorkTasks(): number {
    this.doneTasksList = false;
    return this.getQuantityActiveItems();
  }

  public getAllDoneTasks(): number {
    this.doneTasksList = true;
    return this.items.reduce((acc: number, item: IItem) => {
      if (item.finished === true) {
        acc = acc + 1;
      }
      return acc;
    }, 0);
  }

  public changeStatus(id: number): void {
    const foundItem = this.findItem(id, this.items);
    foundItem.finished = true;
  }

  public sortByDateDown(): void {
      this.items.sort((a, b) => {
      return a.date > b.date ? 1 : -1;
    });
  }

  public sortByDateUp(): void {
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
