const appFancyButton = {
  controller() {

  },
  template: require('./template-fancy-btn.html'),
  bindings: {
    btnValue: '@',
    handleClick: '&'
  }
};
export { appFancyButton };
