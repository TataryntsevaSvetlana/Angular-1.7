import {IItem} from '../../Services/ToDoListService';

const appTaskItemComponent = {


  template: `
    <div>
      <div ng-model="$ctrl.newToDoTitle"></div>
      <div ng-model="$ctrl.newToDoDate"></div>
      <div class="textField"></div>
  
      <div class="btnGroup" ng-if="">
        <app-fancy-button btn-value="Edit" handle-click="$ctrl.boba()"</app-fancy-button>
        <app-fancy-button btn-value="Finished"></app-fancy-button>
      </div>
    </div>
  
    <div ng-if="">
      <app-textarea-field btn-value="Save" handle-click="$ctrl.boba()"></app-textarea-field>
      <app-fancy-button btn-value="Save" handle-click="$ctrl.boba()">
      <!--</app-fancy-button btn-value="" btn-click="$ctrl.boba()">-->
    </div>`,


  controller: class AppTaskItemController {
  },

  bindings: {

  }
};



export { appTaskItemComponent };
