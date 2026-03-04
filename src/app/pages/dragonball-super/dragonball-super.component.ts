import { Component, computed, inject, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';
import { DragonballService } from '../../services/dragonball.service';

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
  dragonballService = inject(DragonballService);
}
