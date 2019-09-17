import { module } from 'angular';
import { appCreateCardComponent} from './Components/create-card-component/app-create-card-component';
import { appTasksListComponent } from './Components/tasks-list-component/app-tasks-list-component';
import { appTaskItemComponent } from './Components/task-item-component/app-task-item-component';
import { appTextareaFieldComponent } from './Components/textareaFild/app-textarea-component';
import { appFancyButton } from './Components/fancy-button/app-fancy-btn-component';
import { appPetList } from './Components/pet-list/app-pet-list-component';
import { ToDoListService } from './Services/ToDoListService';

// const appModule = ;

module('app-root', [])
  .factory('ToDoListService', ToDoListService)
  .component('appTasksListComponent', appTasksListComponent)
  .component('appCreateCardComponent', appCreateCardComponent)
  .component('appTaskItemComponent', appTaskItemComponent)
  .component('appPetList', appPetList)
  .component('appTextareaField', appTextareaFieldComponent)
  .component('appFancyButton', appFancyButton);


