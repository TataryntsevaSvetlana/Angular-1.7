class AppTaskItemController {
  newDescription: string;
  item: any;

  constructor() {
    setTimeout(() => {
      this.newDescription = this.item.description;
    }, 0);
  }
}
export { AppTaskItemController };
