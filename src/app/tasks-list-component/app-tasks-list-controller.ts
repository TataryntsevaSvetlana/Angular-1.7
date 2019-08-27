import {IRootScopeService} from 'angular';

export interface IItem {
  id: number;
  description: string;
  finished: boolean;
  date: string;
  title: string;
}

class AppTasksListController {
  todoItems: IItem[];
  editableItemId: number;
  newToDoDescription: string;
  newToDoDate: string;
  newToDoTitle: string;

  constructor($rootScope: IRootScopeService) {
    $rootScope.$on('addTask', (event, obj) => {
      this.addItem(obj);
    });

    this.todoItems = [
      {
        id: 1,
        description: 'to eat',
        finished: false,
        date: '15.08.19',
        title: 'Home'
      }, {
        id: 2,
        description: 'to sleep',
        finished: false,
        date: '05.07.19',
        title: 'Home'
      }, {
        id: 3,
        description: 'to work',
        finished: false,
        date: '22.08.19',
        title: 'Work'
      }
    ];
  }

  addItem(obj: IItem): void {
    this.todoItems.push(obj);
    console.log(this.todoItems);
  }

  getQuantityActiveItems(): number {
    return this.todoItems.reduce((acc: number, item: IItem) => {
      if (item.finished !== false) {
        acc = acc - 1;
      }
      return acc;
    }, this.todoItems.length);
    console.log(this.todoItems);
  }

  findItem(id: number, arr: IItem[]): IItem {
    return arr.find(el => el.id === id);
  }

  changeStatus(id: number): void {
    const findItem = this.findItem(id, this.todoItems);
    findItem.finished = true;
    console.log('this.todoItems after change status', this.todoItems);
  }



  editTask(id: number) {
    this.editableItemId = id;
  }

  saveEditableItem = (id: number, description: string): void => {
    const itemToUpdate = this.findItem(id, this.todoItems);

    itemToUpdate.description = description;
    this.editableItemId = undefined;
  }
}
export { AppTasksListController };
