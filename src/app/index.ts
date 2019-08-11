import { module } from 'angular';
import { someComponent } from './component/app-component';

module('app-root', [])
  .component('someComponent', someComponent);
