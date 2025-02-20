import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { PokemonServiceService } from '../pokemon-service.service';
import { inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { PaginatorComponent } from '../paginator/paginator.component';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonDetailComponent, PaginatorComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
  
})
export class PokemonListComponent {
  public pokemons: any[] = [];

  private pokemonService = inject(PokemonServiceService);

  constructor() {
    this.pokemonService.getPokemonList().subscribe((data) => {
      this.pokemons = data.results;
      console.log('this.pokemons', this.pokemons);
    });
  }

  clickName = (frase: string) => {
    console.log(frase);
  }

  nextPage() {
    console.log('siguiente pagina');
  }

  prevPage() {
    console.log('pagina anterior');
  }
 }
