import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../services/pokemon-service.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {
  pokemonItem: any[]=[];
  pokemonStats1: any[]=[];
  pokemonStats: any[]=[];
  pokemonGames: any[]=[];
  pokemonAbilities: any[]=[];
  pokemonMoves:any[]=[];



  constructor(
    private pokemonService:PokemonServiceService,
    private route:ActivatedRoute,
    private location:Location
    ) { 
  }

  ngOnInit(): void {
    this.loadPokemonProfile();
  }

  private loadPokemonProfile(){
    const nameStr = String(this.route.snapshot.paramMap.get('name'));
    this.pokemonService.getPokemonByName(nameStr).
    subscribe((response:any) => {
      this.pokemonItem.push(response);
     
      
      length = response.stats.length;
      if(length > 5){
        length = 5;
      }

      for (let index = 0; index < length; index++) {
        this.pokemonStats.push(response.stats[index]);
      }

      
      length = response.game_indices.length;
      if(length > 5){
        length = 5;
      }

      for (let index = 0; index < length; index++) {
        this.pokemonGames.push(response.game_indices[index]);
      }


      length = response.abilities.length;
      if(length > 5){
        length = 5;
      }

      for (let index = 0; index < length; index++) {
        this.pokemonAbilities.push(response.abilities[index]);
      }

      length = response.moves.length;
      if(length > 5){
        length = 5;
      }

      for (let index = 0; index < length; index++) {
        this.pokemonMoves.push(response.moves[index]);
      }
      
      //this.pokemonMoves.push(this.pokemonItem[0].moves);
    });
  }


}
