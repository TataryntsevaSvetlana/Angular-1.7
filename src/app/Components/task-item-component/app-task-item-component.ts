import {IItem} from '../../Services/ToDoListService';

const appTaskItemComponent = {


  template: `
    <div>
      <div class="card-title">Title: {{$ctrl.item.title}}</div>
      <div>Date: {{$ctrl.item.date}}</div>
      <div class="textField"> Description: {{$ctrl.item.description}}</div>
      <div>id:{{$ctrl.item.id}}</div>
      <div>Editable id:{{$ctrl.ToDoListService.newEditableDescription}}</div>
  
      <div class="btnGroup">
        <div>
          <app-fancy-button btn-value="Edit" handle-click="$ctrl.setEditableItemId(item)"></app-fancy-button>
          <app-fancy-button btn-value="Finished" handle-click="$ctrl.changeStatus()"></app-fancy-button>
        </div>
      </div>
    </div>`,


  controller: class AppTaskItemController {
    item: IItem;
    newDescription: string;
    // saveEditableItem: any;
    //
    //  onInit() {
    //    this.newDescription = this.item.description;
    //  }
  },

  bindings: {
    setEditableItemId: '&',
    item: '=',
    editableItemId: '<',
    changeStatus: '&',
    saveEditableItem: '=',
  }
};



export { appTaskItemComponent };
