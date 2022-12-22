export interface IAnimal {
  name: string;
  sound: string;
}

export class Animal {
  constructor(private _info: IAnimal) {}
}
