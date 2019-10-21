const appSearchFieldComponent = {
  controller: class SearchFieldController {},
  template: `

<div class="search">
  <label for="inputUserNameField">Search:</label>
  <input id="inputUserNameField" ng-blur="$ctrl.inputValue"
      ng-model='$ctrl.inputValue'>
  </div>
    `,
  bindings: {
    inputValue: '=',
  },
};
export { appSearchFieldComponent };
