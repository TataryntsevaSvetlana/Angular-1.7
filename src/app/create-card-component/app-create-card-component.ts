import { AppCreateCardController } from './app-create-card-controller';

const appCreateCardComponent = {
  controller: AppCreateCardController,
  template: require('../create-card-component/template-create-card.html'),
  bindings: {
    editableItemId: '=',
    item: '=',
    editTask: '&',
    changeStatus: '&',
    saveEditableItem: '=',
  },
};

export { appCreateCardComponent };
