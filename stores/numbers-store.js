import { makeAutoObservable } from "mobx";

class Counter {
  count = 1;

  constructor() {
    makeAutoObservable(this);
  }

  add() {
    this.count++;
  }

  sub() {
    this.count--;
  }
}

export default Counter;
