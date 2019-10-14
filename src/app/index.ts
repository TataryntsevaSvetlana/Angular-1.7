import { module } from 'angular';
import { appNavBarComponent} from './Components/nav-bar-component/app-nav-bar-component';
import { appModalCreateCardComponent} from './Components/modals-components/app-modal-create-card-component';
import { appPopUpComponent} from './Components/pop-up-component/app-pop-up-component';
import { appTasksListComponent } from './Components/tasks-list-component/app-tasks-list-component';
import { appTaskItemComponent } from './Components/task-item-component/app-task-item-component';
import { appTextareaFieldComponent } from './Components/textarea-fild-component/app-textarea-component';
import { appSearchFieldComponent } from './Components/search-field-component/app-search-field-component';
import { appFancyButton } from './Components/fancy-button/app-fancy-btn-component';
import { ToDoListService } from './Services/ToDoListService';
import { ModalService } from './Services/ModalService';

module('app-root', ['ui.router'])
.component('appNavBarComponent', appNavBarComponent)
.component('appTasksListComponent', appTasksListComponent)
.component('appModalCreateCardComponent', appModalCreateCardComponent)
.component('appTaskItemComponent', appTaskItemComponent)
.component('appTextareaField', appTextareaFieldComponent)
.component('appFancyButton', appFancyButton)
.component('appPopUpComponent', appPopUpComponent)
.component('appSearchField', appSearchFieldComponent)
  .service('ToDoListService', ToDoListService)
  .service('ModalService', ModalService)
  // .service('HttpService', HttpService)
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
  .config(($locationProvider, $stateProvider) => {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    var helloState = {
      name: 'hello',
      url: '/',
      template: `
        <aside class="aside"> 
          <app-nav-bar-component></app-nav-bar-component> 
        </aside> 
        <main class="main"> 
          <app-tasks-list-component></app-tasks-list-component> 
        </main>`
    };

    var aboutState = {
      name: 'about',
      url: '/about',
      template: '<h3>Its the UI-Router hello world app!</h3>'
    };

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
  })




