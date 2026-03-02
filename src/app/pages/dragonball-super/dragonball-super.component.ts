import { Component, computed, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';

interface Character {
  id: number;
  name: string;
  power: number;
}
@Component({
  templateUrl: './dragonball-super.template.html',
  selector: 'dragonball-super',
  imports: [CharacterList],
})
export class DragonballSuperComponent {
  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 10000,
    },
  ]);

  /* 
  addCharacter(name: string, power: number) {
    this.characters.update((current) => [...current, { id: current.length + 1, name, power }]);
  } */
}
