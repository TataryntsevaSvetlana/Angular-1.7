import {IItem} from '../../Services/ToDoListService';

const appTaskItemComponent = {


  template: `
    <div ng-init="$ctrl.onInit()">
      <div>Title: {{$ctrl.item.title}}</div>
      <div>Date: {{$ctrl.item.date}}</div>
      <div class="textField"> Description: {{$ctrl.item.description}}</div>
      <div>id:{{$ctrl.item.id}}</div>
      <div>Editable id:{{$ctrl.editableItemId}}</div>
  
      <div class="btnGroup" ng-if="$ctrl.item.id !== $ctrl.editableItemId">
        <div>
          <app-fancy-button btn-value="Edit" handle-click="$ctrl.setEditableItemId(item.id)"></app-fancy-button>
          <app-fancy-button btn-value="Finished" handle-click="$ctrl.changeStatus()"></app-fancy-button>
        </div>
      </div>
      
      <div ng-if="$ctrl.item.id === $ctrl.editableItemId">
       <app-textarea-field 
         value="$ctrl.newDescription"
         handle-change="$ctrl.handleChange()"
       ></app-textarea-field>
       <app-fancy-button 
         btn-value="Save" 
         handle-click="$ctrl.saveEditableItem({id: $ctrl.item.id, newDescription: $ctrl.newDescription })"></app-fancy-button>
      </div>
    </div>`,


  controller: class AppTaskItemController {
    newDescription: string;
    item: IItem;
    saveEditableItem: any;

    onInit() {
      this.newDescription = this.item.description;
    }
  },

  bindings: {
    item: '=',
    setEditableItemId: '&',
    changeStatus: '&',
    saveEditableItem: '&',
    editableItemId: '=',
  }
};



export { appTaskItemComponent };
