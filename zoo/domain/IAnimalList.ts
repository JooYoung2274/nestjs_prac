import { Animal, IAnimal } from '../schema/animal';

export interface IAnimalList {
  generateAnimal(info: IAnimal): Animal;
  addAnimal(animal: Animal): number;
  getAnimalList(): Animal[];
}
