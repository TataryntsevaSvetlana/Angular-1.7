interface IItem {
  id: number;
  description: string;
  finished: boolean;
  date: string;
  title: string;
}

function ToDoListService() {
  return {
    items: [
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
    ],

    getTodoItems(): IItem[] {
      return this.items;
    },

    addItem(obj: IItem): void {
      this.items.push(obj);
    },

    findItem(id: number, arr: IItem[]): IItem {
      return arr.find(el => el.id === id);
    },

    getTotalLength(): number {
      return this.items.lenght;
    },

    getQuantityActiveItems(): number {
      return this.items.reduce((acc: number, item: IItem) => {
        if (item.finished !== false) {
          acc = acc - 1;
        }
        return acc;
      }, this.getTotalLength());
    },

    changeStatus(id: number): void {
      const foundItem = this.findItem(id, this.items);

      foundItem.finished = true;
    },

    setEditableItemId(id: number): number {
      return this.editableItemId = id;
    },

    saveEditableItem(id: number, description: string): void  {
      const itemToUpdate = this.findItem(id, this.items);

      itemToUpdate.description = description;
      this.editableItemId = undefined;
    }
  };
}

export { ToDoListService, IItem };
