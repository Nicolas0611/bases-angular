import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html',
})
export class CharacterAdd {
  name = signal<string>('');
  power = signal<number>(0);

  newCharacter = output<Character>();

  addCharacter() {
    const newCharacter = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };
    this.newCharacter.emit(newCharacter);
  }
}
