import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
  param = "";
  constructor(
    private http:HttpClient
  ) { }

  //Get pokemon top 100 list
public getPokemonList(limit:number, offset:number){
  this.param = "limit=" + limit + "&offset=" + offset;
  return this.http.get(`http://localhost:8080/api/v1/pokemons?`+this.param);
}

//Get pokemon by name
public getPokemonByName(name:string){
  return this.http.get(`http://localhost:8080/api/v1/pokemon/${name}`);
}


}
