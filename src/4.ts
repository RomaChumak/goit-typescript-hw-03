class Key {
    private signature: number;

    constructor(){
        this.signature = Math.random();
    }
      getSignature(): number {
    return this.signature;
  }
}
class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key; 
    }

    getKey(): Key {
    return this.key
    }
 }

abstract class MHouse{
    door: boolean;
    key: Key;
    tenants: Person[] = [];

    constructor(key: Key) {
        this.door = false;
        this.key = key;
    }
    comeIn(person: Person) {
       this.door
      ? this.tenants.push(person)
      : alert("Sorry, but the door is closed");
    }

    abstract openDoor(key: Key): void;
}

class MyHouse extends MHouse{
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    } else {
      this.door = false;
    }
    }
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};