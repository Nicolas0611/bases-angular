import { Component, computed, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';

interface Character {
  id: number;
  name: string;
  power: number;
}
@Component({
  templateUrl: './dragonball-super.template.html',
  selector: 'dragonball-super',
  imports: [CharacterList, CharacterAdd],
})
export class DragonballSuperComponent {
  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 10000,
    },
  ]);

  addCharacter(newCharacter: Character) {
    this.characters.update((current) => [...current, newCharacter]);
  }
}
