const appTextareaFieldComponent = {
  controller: class TextareaController {},
  template: `
    <textarea
      class="textareaField"
      ng-model='$ctrl.value'
      rows='5'
      ng-maxlength="200">
    </textarea>`,
  bindings: {
    value: '=',
  },
};
export { appTextareaFieldComponent };
