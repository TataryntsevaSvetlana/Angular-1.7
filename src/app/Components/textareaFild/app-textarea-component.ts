import { TextareaController } from './app-textarea-controller';

const appTextareaFieldComponent = {
  controller: TextareaController,
  template: require('./template-textareaField.html'),
  bindings: {
    value: '=',
  },
};
export { appTextareaFieldComponent };
