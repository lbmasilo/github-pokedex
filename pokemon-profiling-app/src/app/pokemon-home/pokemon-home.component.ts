import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../services/pokemon-service.service';

@Component({
  selector: 'app-pokemon-home',
  templateUrl: './pokemon-home.component.html',
  styleUrls: ['./pokemon-home.component.css']
})

export class PokemonHomeComponent implements OnInit {
  pokemonList: any[]=[];
  tempPokemonList: any[]=[];
  currentPage = 1;
  totalList = 100;
  searchTerm = "";
  term = "";

  constructor(private pokemonService:PokemonServiceService) { 
    
  }

  ngOnInit(): void {
    this.getPokemonItems();
  }

  getPokemonItems(){
    this.pokemonService.getPokemonList(10, this.currentPage+1)
    .subscribe((response:any) => { 
      this.pokemonList.push(response);
      console.log(response)
    });
  }

}
