import {IItem} from '../../Services/ToDoListService';

const appTaskItemComponent = {


  template: `
    <div class='task' ng-if="$ctrl.item.id !== $ctrl.editableItemId">
      <div>{{$ctrl.item.title}}</div>
      <div>{{$ctrl.item.date}}</div>
  
      <div class="textField">{{$ctrl.item.description}}</div>
  
      <div class="btnGroup">
        <app-fancy-button btn-value="Edit" handle-click="$ctrl.setEditableItemId(item.id)"></app-fancy-button>
        <app-fancy-button btn-value="Finished" handle-click="$ctrl.changeStatus(item.id)"></app-fancy-button>
      </div>
    </div>
  
    <div class='task' ng-if="$ctrl.item.id === $ctrl.editableItemId">
      <app-textarea-field value="$ctrl.item.description"></app-textarea-field>
      <app-fancy-button
        btn-value="Save"
        handle-click="$ctrl.biba(item.id, $ctrl.newDescription)">
      </app-fancy-button>
    </div>`,


  controller: class AppTaskItemController {

    biba(a,b){
      console.log(a,b);
    }
  },


  bindings: {
    editableItemId: '=',
    item: '=',
    newDescription: '=',
    setEditableItemId: '&',
    changeStatus: '&',
    saveEditableItem: '=',
  },
};



export { appTaskItemComponent };
