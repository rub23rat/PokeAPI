import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { PokemonServiceService } from '../pokemon-service.service';
import { inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { PaginatorComponent } from '../paginator/paginator.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonCardComponent, PaginatorComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
  
})
export class PokemonListComponent {
  public pokemons: any[] = [];
  pages?: any;
  private pokemonService = inject(PokemonServiceService);
  private router = inject(Router);

  constructor() {
    this.pokemonService.getPokemonList().subscribe((data) => {
      this.pokemons = data.results;
      this.pages = {next: data.next, previous: data.previous};
      console.log('this.pokemons', this.pokemons);
    });
  }

  clickName = (pokemon: string) => {
    this.router.navigate(['/pokemon', pokemon]);
  }

  nextPage() {
    this.pokemonService.changePage(this.pages.next).subscribe((data) => {
      this.pages = {next: data.next, previous: data.previous};
      this.pokemons = data.results;
  })
  }
  prevPage() {
    if (this.pages.previous) {
      this.pokemonService.changePage(this.pages.previous).subscribe((data) => {
        this.pages = {next: data.next, previous: data.previous};
        this.pokemons = data.results;
    });
  };
 }
}
