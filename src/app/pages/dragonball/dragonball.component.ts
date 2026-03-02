import { Component, computed, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  templateUrl: './dragonball.template.html',
})
export class DragonballComponent {
  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 10000,
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 9000,
    },
    {
      id: 3,
      name: 'Gohan',
      power: 8000,
    },
    {
      id: 4,
      name: 'Trunks',
      power: 500,
    },
  ]);

  powerClasses = computed(() => {
    return {
      'text-danger': true,
    };
  });
  addCharacter(name: string, power: number) {
    this.characters.update((current) => [...current, { id: current.length + 1, name, power }]);
  }
}
