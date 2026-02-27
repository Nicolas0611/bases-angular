import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './hero.template.html',
  imports: [UpperCasePipe],
})
export class HeroComponent {
  name = signal('ironman');
  age = signal(45);
  heroDescription = computed(() => `${this.name()} - ${this.age()}`);
  capitalizedName = computed(() => this.name().toUpperCase());

  changeHero() {
    this.name.set('spiderman');
    this.age.set(26);
  }
  resetForm() {
    this.name.set('ironman');
    this.age.set(45);
  }
  changeAge(value: number) {
    this.age.set(value);
  }
  capitalizeName() {
    this.name.update((current) => current.toUpperCase());
  }
}
