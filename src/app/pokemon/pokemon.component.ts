import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemon: any [] = []
  constructor( private _httpService: HttpService ) { }

  ngOnInit(): void {
    console.log( "Before loading Pokemons: ", this.pokemon );
    let observable = this._httpService.getPokemon();
    
    observable.subscribe( (data:any) =>{
      this.pokemon = data.name;
      console.log("Got our Pokemon!",data.name, data);
    });
    console.log( "After loading pokemon:", this.pokemon );
    
  }

}
