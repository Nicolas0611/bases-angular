import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter.template.html',
})
export class CounterComponent {
  counter = 10;
  counterSignal = signal(10);

  incrementBy(value: number) {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }
  decrementBy(value: number) {
    this.counter -= value;
    this.counterSignal.update((current) => current - value);
  }
  reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
