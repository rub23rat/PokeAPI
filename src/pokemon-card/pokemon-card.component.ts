import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-pokemon-card',
  imports: [],
  templateUrl: `./pokemon-card.component.html`,
  styleUrl: './pokemon-card.component.css',
})
export class PokemonCardComponent {
  @Input() pokemon: string = '';
  @Input() imagen: string = '';
  @Input() tipo: string = '';
  @Input() id: number = 0;
  @Output() clickName = new EventEmitter<string>();
 }
 
