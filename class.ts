class Animal {
  public name: string;
  protected age: number;
  private sound: string;

  constructor(name: string, age: number, sound: string) {
    this.name = name;
    this.age = age;
    this.sound = sound;
  }

  public makeSound(): void {
    console.log(`${this.name} makes ${this.sound}!`);
  }

  protected getAge(): number {
    return this.age;
  }

  private getSound(): string {
    return this.sound;
  }
}

class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age, "bark");
  }

  public displayInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
    // Accessing protected method from the base class
    console.log(`Age: ${this.getAge()}`);
    // Accessing private method from the base class
    // console.log(`Sound: ${this.getSound()}`); // This would result in a TypeScript error
  }
}

let dog = new Dog("Buddy", 3);
dog.makeSound(); // Output: Buddy makes bark!
dog.displayInfo(); // Output: Name: Buddy, Age: 3, Age: 3
