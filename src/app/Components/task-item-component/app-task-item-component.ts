import {IItem} from '../../Services/ToDoListService';

const appTaskItemComponent = {


  template: `
    <div>
      <div></div>
      <div></div>
      <div class="textField"></div>
  
      <div class="btnGroup">
        <app-fancy-button btn-value="Edit"></app-fancy-button>
        <app-fancy-button btn-value="Finished""></app-fancy-button>
      </div>
    </div>
  
    <div>
      <app-textarea-field ></app-textarea-field>
      <app-fancy-button>
      </app-fancy-button>
    </div>`,


  controller: class AppTaskItemController {

    biba(a,b){
      console.log(a,b);
    }
  },
};



export { appTaskItemComponent };
