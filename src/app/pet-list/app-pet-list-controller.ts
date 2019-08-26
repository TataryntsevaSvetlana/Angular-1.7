class AppPetListController {
  pets: string[];

  constructor() {
    this.pets = ['slon', 'biba', 'boba'];
  }

  showPet(pet) {
    alert(pet);
  }
}
export { AppPetListController };
