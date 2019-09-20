const appFancyButton = {


  controller: class AppFancyBtnController { },


  template: `
    <button class="btn-primary"
      ng-click="$ctrl.handleClick()">
      {{$ctrl.btnValue}}
    </button>
  `,



  bindings: {
    btnValue: '@',
    handleClick: '&'
  }
};
export { appFancyButton };
