import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
    providedIn: 'root'
})
export class DbzService {

    public characters: Character[] = [
        {
            name: 'Krillin',
            power: 2000,
            id: uuid()
        },
        {
            name: 'Goku',
            power: 5000,
            id: uuid()
        },
        {
            name: 'Picoro',
            power: 4000,
            id: uuid()
        }
    ];
    constructor() { }

    addCharacter(character: Character): void {
        const newCharacter: Character = { id: uuid(), ...character };
        this.characters.push(newCharacter);
    }

    deleteCharacterById(id: string) {
        this.characters = this.characters.filter(character => character.id !== id);
    }
}