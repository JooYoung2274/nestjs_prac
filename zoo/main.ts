import { Animal } from './schema/animal';
import { AnimalList } from './domain/animalList';
import { Operation } from './domain/operation';
import { Human } from './domain/human';
import { IAnimalList } from './domain/IAnimalList';

class Main {
  constructor(private _human: Human) {}

  init() {
    this._human.mainPage();
  }
}

const initAnimalList: Animal[] = [];

const animalList: IAnimalList = new AnimalList(initAnimalList);
const operation = new Operation(animalList);
const human = new Human(operation);

const main = new Main(human);
main.init();
