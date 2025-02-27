import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
  private http = inject(HttpClient);

  //TODO: cambiar any
  getPokemonList(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=16');
  }
  changePage(url: string): Observable<any> {
    return this.http.get(url);
  }

  getPokemonDetail(pokemonId: string): Observable<any>{
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  }
}
