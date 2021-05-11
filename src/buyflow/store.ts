import { makeAutoObservable } from 'mobx';

export interface DevInsValues {
  firstName: string
  lastName: string
  email: string
  age: number
}

export class DevInsStore implements DevInsValues {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  age: number = 0;

  constructor () {
    makeAutoObservable(this);
  }

  setFirstName (firstName: string) {
    this.firstName = firstName;
  }

  setLastName (lastName: string) {
    this.lastName = lastName;
  }

  setEmail (email: string) {
    this.email = email;
  }

  setAge (age: number) {
    this.age = age;
  }
}

export interface QaInsValues {
  email: string
  age: number
}

export class QaInsStore implements QaInsValues {
  email: string = '';
  age: number = 0;

  constructor () {
    makeAutoObservable(this);
  }

  setEmail (email: string) {
    this.email = email;
  }

  setAge (age: number) {
    this.age = age;
  }
}
