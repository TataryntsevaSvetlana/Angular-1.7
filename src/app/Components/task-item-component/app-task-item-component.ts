const appTaskItemComponent = {


  template: `
    <div>
      <div ng-model="$ctrl.newToDoTitle">Title: {{$ctrl.item.title}}</div>
      <div ng-model="$ctrl.newToDoDate">Date: {{$ctrl.item.date}}</div>
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
       <app-textarea-field value="$ctrl.item.description"></app-textarea-field>
       <app-fancy-button btn-value="Save" handle-click="$ctrl.saveEditableItem(item)"></app-fancy-button>
      </div>
    </div>`,


  controller: class AppTaskItemController {

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
