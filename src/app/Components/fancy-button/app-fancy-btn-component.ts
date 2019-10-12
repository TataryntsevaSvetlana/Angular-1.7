const appFancyButton = {


  controller: class AppFancyBtnController { },


  template: `
    <button class="btn-primary" ng-click="$ctrl.handleClick()">
      {{$ctrl.btnValue}}
    </button>
  `,

  bindings: {
    handleClick: '&',
    btnValue: '@'
  }

};
export { appFancyButton };
