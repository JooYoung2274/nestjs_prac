import * as readline from 'readline';
import { IAnimal } from '../schema/animal';
import { Operation } from './operation';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export class Human {
  constructor(private _operation: Operation) {}

  mainPage() {
    rl.question('\n\n동물 추가 / 동물리스트 / 동물 호출 \n\n["추가" / "동물리스트" / "호출"] - INPUT: ', answer => {
      if (answer === '추가') {
        this.addAnimalPage();
      }

      if (answer === '동물리스트') {
        console.log('\n');
        console.log(this._operation.getAnimalList());
        this.mainPage();
      }

      if (answer === '호출') {
        console.log('\n');
        console.log(this._operation.getAnimalList());
        this.getAnimalSoundPage();
      }
    });
  }

  addAnimalPage() {
    rl.question('\n\n동물 이름 / 취소 \n\n["이름" / "취소"] - INPUT: ', name => {
      this.returnMainPage(name);
      rl.question('\n\n동물 소리 / 취소 \n\n["소리" / "취소"] - INPUT: ', sound => {
        this.returnMainPage(sound);
        const info: IAnimal = { name: name, sound: sound };
        this._operation.addAnimal(info);
        this.mainPage();
      });
    });
  }

  getAnimalSoundPage() {
    rl.question('동물리스트에 나온 "num" 입력 - INPUT: ', answer => {
      console.log(`\n\n   ${this._operation.getAnimalSound(Number(answer))}`);
      this.mainPage();
    });
  }

  returnMainPage(answer: string) {
    if (answer === '취소') this.mainPage();
  }
}
