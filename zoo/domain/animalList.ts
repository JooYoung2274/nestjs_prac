import { Animal, IAnimal } from '../schema/animal';

export class AnimalList {
  constructor(private _initAnimalList: Animal[]) {}

  generateAnimal(info: IAnimal): Animal {
    return new Animal(info);
  }

  addAnimal(animal: Animal): number {
    return this._initAnimalList.push(animal);
  }

  getAnimalList(): Animal[] {
    return this._initAnimalList;
  }
}
