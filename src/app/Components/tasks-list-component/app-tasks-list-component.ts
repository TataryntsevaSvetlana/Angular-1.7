import { AppTasksListController } from './app-tasks-list-controller';

const appTasksListComponent = {
  controller: AppTasksListController,
  template: require('./template-tasks-list.html'),
  bindings: {
    value: '=',
  },
};

export { appTasksListComponent };
