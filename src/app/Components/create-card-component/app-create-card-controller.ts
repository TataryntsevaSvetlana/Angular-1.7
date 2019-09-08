import {IRootScopeService} from 'angular';

class AppCreateCardController {
  newToDoDate: string;
  newToDoTitle: string;
  newToDoTask: string;
  $rootScope: IRootScopeService;

  constructor($rootScope: IRootScopeService) {
    this.newToDoTask = '';
    this.newToDoTitle = 'Work';
    this.$rootScope = $rootScope;
  }

  addItem(): any {
    this.$rootScope.$emit('addTask', {
      id:  Date.now(),
      description: this.newToDoTask,
      finished: false,
      date: this.newToDoDate,
      title: this.newToDoTitle
    });

    this.clearAddInput();
  }


  clearAddInput(): void {
    this.newToDoTask = '';
    this.newToDoDate = '';
    this.newToDoTitle = '';
  }
}
export { AppCreateCardController };
