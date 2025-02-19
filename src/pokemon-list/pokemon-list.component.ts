import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonDetailComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent {
  public pokemons = [
    {name: 'Pikachu', src: 'https://pngimg.com/uploads/pokemon/pokemon_PNG11.png', habilities: ['Electricidad', 'Velocidad']},
    {name: 'Charmander', src: 'https://pngimg.com/uploads/pokemon/pokemon_PNG2.png', habilities: ['Fuego', 'Cola']},
    {name: 'Squirtle', src: 'https://pngimg.com/uploads/pokemon/pokemon_PNG5.png', habilities: ['Agua', 'Torrente']},
  ]
  clickName = (frase: string) => {
    console.log(frase);
  }
 }
