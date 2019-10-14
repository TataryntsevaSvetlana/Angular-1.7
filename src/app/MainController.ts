
class MainController {
  params: any;
  constructor($routParams) {
    this.params = $routParams.pageId;
  }
}


export { MainController};
