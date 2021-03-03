class Animal {
  constructor(name = 'aaa') {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

const dog = new Animal('dog');
