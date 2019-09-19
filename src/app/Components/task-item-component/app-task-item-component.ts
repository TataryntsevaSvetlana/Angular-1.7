import {IItem} from '../../Services/ToDoListService';

const appTaskItemComponent = {
  template: `<div class='task' ng-if="$ctrl.item.id !== $ctrl.editableItemId">
    <div>{{$ctrl.item.title}}</div>
    <div>{{$ctrl.item.date}}</div>

    <div class="textField">{{$ctrl.item.description}}</div>

    <div class="btnGroup">
      <app-fancy-button btn-value="Edit" handle-click="$ctrl.setEditableItemId(item.id)"></app-fancy-button>
      <app-fancy-button btn-value="Finished" handle-click="$ctrl.changeStatus(item.id)"></app-fancy-button>
    </div>
  </div>

  <div class='task' ng-if="$ctrl.item.id === $ctrl.editableItemId">
    <app-textarea-field value="$ctrl.newDescription"></app-textarea-field>
    <app-fancy-button
      btn-value="Save"
      handle-click="$ctrl.saveEditableItem(item.id, $ctrl.newDescription)">
    </app-fancy-button>
  </div>`,
  controller: class AppTaskItemController { },
  bindings: {
    editableItemId: '=',
    item: '=',
    setEditableItemId: '&',
    changeStatus: '&',
    saveEditableItem: '=',
  },
};
export { appTaskItemComponent };
