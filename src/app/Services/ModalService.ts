import {IItem} from './ToDoListService';

class ModalService {
  editableId: number;
  editableDescription: string;
  isShowModalCreateCard: boolean;
  inputUserName: string;
  isShowModalEditTask: boolean;

  constructor() {
    this.isShowModalCreateCard = false;
    this.isShowModalEditTask = false;
  }

  showModalCreateCard(): void {
    this.isShowModalCreateCard = true;
  }

  hideModalCreateCard(): void {
    this.isShowModalCreateCard = false;
  }

  showModalEditTask(item: IItem): void {
    this.isShowModalEditTask = true;
    this.editableId = item.id;
    this.editableDescription = item.description;
  }

  hideModalEditTask(): void {
    this.isShowModalEditTask = false;
  }

}


export { ModalService};
