const app2Component = {
 template: `
<button ng-click="$ctrl.sortUpElements()">Sort up</button>
<button ng-click="$ctrl.sortDownElements()">Sort down</button>
<ul>
  <li ng-repeat="item in $ctrl.arr"  ng-click="$ctrl.showInput(item.id)">
    <div ng-if="item.id !== $ctrl.editItem ">{{item.value}}</div>
    <div ng-if="item.id === $ctrl.editItem">
     <input ng-model="item.value"/>
    </div>
    <app-fancy-button 
      handle-click="$ctrl.onEditButtonClick()"
      value="Edit">
    </app-fancy-button>
    <button ng-click="$ctrl.deleteElement(item.id)">Delete</button>
  </li>
</ul>
`
,


  controller: class AppTasksListController {
    arr: any[];
    editItem: number;
    constructor() {
      this.arr = [
        { id: 1, value: 'a' },
        { id: 2, value: 'b' },
        { id: 3, value: 'e' },
        { id: 51, value: 'f' },
        { id: 1234, value: 'g' },
        { id: 2341, value: 'c' },
        { id: 5441, value: 'd' },
      ];

    }
    deleteElement(id): void {
      this.arr = this.arr.filter((el) => {
        return el.id !== id;
      });
    }
    showInput(id) {
      this.editItem = id;
    }

    sortUpElements(): any {
      this.arr.sort((a, b) => {
        return a.value > b.value ? 1 : -1;
      });
    }

    sortDownElements(): any {
      this.arr.sort((a, b) => {
        return a.value < b.value ? 1 : -1;
      });
    }

    onEditButtonClick(){
      console.log('SSSSSSSSSSSSSSs')
    }

  }
};

export { app2Component };
