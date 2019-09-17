import { module } from 'angular';
import { appCreateCardComponent} from './create-card-component/app-create-card-component';
import { appTasksListComponent } from './tasks-list-component/app-tasks-list-component';
import { appTaskItemComponent } from './task-item-component/app-task-item-component';
import { appTextareaFieldComponent } from './textareaFild-component/app-textarea-component';
import { appFancyButton } from './fancy-button-component/app-fancy-btn-component';
import { appPetList } from './pet-list/app-pet-list-component';


module('app-root', [])
  .component('appCreateCardComponent', appCreateCardComponent)
  .component('appTasksListComponent', appTasksListComponent)
  .component('appTaskItemComponent', appTaskItemComponent)
  .component('appPetList', appPetList)
  .component('appTextareaField', appTextareaFieldComponent)
  .component('appFancyButton', appFancyButton);

