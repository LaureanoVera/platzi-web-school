export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hi, I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
    this.owner = owner;
  }

  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log('woof!');
    }
  }
}

const moeru = new Dog('Moeru', 'Lauri');
moeru.move();
console.log(moeru.greeting());
moeru.woof(4);
