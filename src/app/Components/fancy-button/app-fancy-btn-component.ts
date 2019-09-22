const appFancyButton = {


  controller: class AppFancyBtnController { },


  template: `
    <button class="btn-primary" ng-click="$ctrl.handleClick()">
      {{$ctrl.value}}
    </button>
  `,
  bindings: {
    handleClick: '&',
    value: '@'
  }

};
export { appFancyButton };
