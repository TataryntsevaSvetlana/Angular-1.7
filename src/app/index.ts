import { module } from 'angular';
import { appNavBarComponent} from './Components/nav-bar-component/app-nav-bar-component';
import { appAboutComponent} from './Components/about-component/app-about-component';
import { appModalCreateCardComponent} from './Components/modals-components/app-modal-create-card-component';
import { appPopUpComponent} from './Components/pop-up-component/app-pop-up-component';
import { appTasksListComponent } from './Components/tasks-list-component/app-tasks-list-component';
import { appTaskItemComponent } from './Components/task-item-component/app-task-item-component';
import { appTextareaFieldComponent } from './Components/textarea-fild-component/app-textarea-component';
import { appSearchFieldComponent } from './Components/search-field-component/app-search-field-component';
import { appFancyButton } from './Components/fancy-button/app-fancy-btn-component';
// import {MainController} from './Routs/MainController';
import { ToDoListService } from './Services/ToDoListService';
import { ModalService } from './Services/ModalService';
import { appModalEditTaskComponent} from './Components/modals-components/app-modal-edit-task-component';
import { routeConfig } from './Routs/route';

module('app-root', ['ui.router'])
.component('appAboutComponent', appAboutComponent)
.component('appNavBarComponent', appNavBarComponent)
.component('appTasksListComponent', appTasksListComponent)
.component('appModalCreateCardComponent', appModalCreateCardComponent)
.component('appModalEditTaskComponent', appModalEditTaskComponent)
.component('appTaskItemComponent', appTaskItemComponent)
.component('appTextareaField', appTextareaFieldComponent)
.component('appFancyButton', appFancyButton)
.component('appPopUpComponent', appPopUpComponent)
.component('appSearchField', appSearchFieldComponent)
  .service('ToDoListService', ToDoListService)
  .service('ModalService', ModalService)
  .config(routeConfig)
  // .service('HttpService', HttpService)
  // .factory('ToDoListService', [() => {
  //   const value = 'data';]]
  //   return new ToDoListService(); }])
  // .provider('ToDoListService', [() => {
  //   return {
  //     $get: () => {
  //       return new ToDoListService();
  //     }
  //   };
  // }])









