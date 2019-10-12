const appSearchFieldComponent = {
  controller: class SearchFieldController {},
  template: `
    <input
      class="searchField"
      ng-model='$ctrl.inputValue'>
    `,
  bindings: {
    inputValue: '=',
  },
};
export { appSearchFieldComponent };
