import { module } from 'angular';
import { appCreateCardComponent} from './Components/create-card-component/app-create-card-component';
import { appTasksListComponent } from './Components/tasks-list-component/app-tasks-list-component';
import { appTaskItemComponent } from './Components/task-item-component/app-task-item-component';
import { appTextareaFieldComponent } from './Components/textareaFild/app-textarea-component';
import { appFancyButton } from './Components/fancy-button/app-fancy-btn-component';
import { appPetList } from './Components/pet-list/app-pet-list-component';
import { ToDoListService } from './Services/ToDoListService';
import { app2Component } from '../app2/app-2-component';

// const appModule = ;

module('app-root', [])
  // .component('app2Component', app2Component)
  .service('ToDoListService', ToDoListService)
  // .factory('ToDoListService', [() => {
  //   const value = 'data';
  //   return new ToDoListService(); }])
  // .provider('ToDoListService', [() => {
  //   return {
  //     $get: () => {
  //       return new ToDoListService();
  //     }
  //   };
  // }])

  .component('appTasksListComponent', appTasksListComponent)
  .component('appCreateCardComponent', appCreateCardComponent)
  .component('appTaskItemComponent', appTaskItemComponent)
  .component('appPetList', appPetList)
  .component('appTextareaField', appTextareaFieldComponent)
  .component('appFancyButton', appFancyButton);


