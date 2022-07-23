export class Animal {
  constructor(protected name: string) {}

  move(): void {
    console.log('Moving along!');
  }

  greeting(): string {
    return `Hi, I'm ${this.name}`;
  }

  protected doSomething() {
    console.log('Doooo');
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
    this.owner = owner;
  }

  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log(`woof! ${this.name}`);
    }
    this.doSomething();
  }

  move(): void {
    console.log('Moving as a dog');
    super.move();
  }
}

const moeru = new Dog('Moeru', 'Lauri');
moeru.move();
console.log(moeru.greeting());
moeru.woof(2);
moeru.move();
