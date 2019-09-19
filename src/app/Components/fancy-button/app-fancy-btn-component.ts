import { AppFancyBtnController } from './app-fancy-btn-controller';


const appFancyButton = {
  controller: AppFancyBtnController,
  template: require('./template-fancy-btn.html'),
  bindings: {
    btnValue: '@',
    handleClick: '&'
  }
};
export { appFancyButton };
