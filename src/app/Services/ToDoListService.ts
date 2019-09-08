interface IItem {
  id: number;
  description: string;
  finished: boolean;
  date: string;
  title: string;
}


function ToDoListService() {
  return {
    getTodoItems() {
      return [
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
    },

    addItem(obj: IItem): void {
      this.getTodoItems().push(obj);
    },

    findItem(id: number, arr: IItem[]): IItem {
      return arr.find(el => el.id === id);
    },

    getTotalLength(): number {
      return this.getTodoItems().lenght;
    },

    getQuantityActiveItems(): number {
      return this.getTodoItems().reduce((acc: number, item: IItem) => {
        if (item.finished !== false) {
          acc = acc - 1;
        }
        return acc;
      }, this.getTotalLength());
    },

    changeStatus(id: number): void {
      const findItem = this.findItem(id, this.getTodoItems());
      findItem.finished = true;
    },

    editTask(id: number): void {
      this.editableItemId = id;
    },

    saveEditableItem(id: number, description: string): void  {
      const itemToUpdate = this.ToDoListService.findItem(id, this.ToDoListService);

      itemToUpdate.description = description;
      this.editableItemId = undefined;
    }
  };
}

export { ToDoListService, IItem };
