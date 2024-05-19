import { ChangeDetectionStrategy, Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})

export class DBZService{

  public characters: Character[] = [

    {
      id: uuid(),
      name: 'Krillin',
      power: 500,

    },
    {
      id: uuid(),
      name: 'Goku',
      power: 1000,
    }
    ,
    {
      id: uuid(),
      name: 'Picoro',
      power: 200,
    }
  ];
  addCharacter(character: Character): void {
    const newCharacter: Character = {...character,
      id: uuid()
    }

    this.characters.push(newCharacter);
  }

  deleteCharacterById(id:string){
    this.characters = this.characters.filter( character => character.id !== id );

  }
}
