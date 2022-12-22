import { IAnimal } from '../schema/animal';
import { IAnimalList } from './IAnimalList';

export class Operation {
  constructor(private _animalList: IAnimalList) {}

  addAnimal(info: IAnimal) {
    const newAnimal = this._animalList.generateAnimal(info);
    return this._animalList.addAnimal(newAnimal);
  }

  getAnimalList() {
    const isAnimalList = this._animalList.getAnimalList();
    return isAnimalList.map((animal, index) => {
      return { num: index, name: animal['_info']['name'] };
    });
  }

  getAnimalSound(num: number) {
    const isAnimalList = this._animalList.getAnimalList();
    return isAnimalList[num]['_info']['sound'];
  }
}
