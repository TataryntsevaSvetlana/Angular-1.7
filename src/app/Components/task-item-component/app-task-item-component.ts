import { AppTaskItemController } from './app-task-item-controller';

const appTaskItemComponent = {
  controller: AppTaskItemController,
  template: require('./template-task-item.html'),
  bindings: {
    editableItemId: '=',
    item: '=',
    editTask: '&',
    changeStatus: '&',
    saveEditableItem: '=',
  },
};
export { appTaskItemComponent };
