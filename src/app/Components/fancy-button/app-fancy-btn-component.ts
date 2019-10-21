const appFancyButton = {


  controller: class AppFancyBtnController { },


  template: `
    <button class="waves-effect waves-light btn" ng-click="$ctrl.handleClick()">
      {{$ctrl.btnValue}}
    </button>
  `,

  bindings: {
    handleClick: '&',
    btnValue: '@'
  }

};
export { appFancyButton };
