export class User {
  id: number;
  name: string | number;
  age: number;
  gender: string;
  constructor(id: number, name: string | number, age : number, gender: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
