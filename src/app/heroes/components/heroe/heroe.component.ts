import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  public name: string = "ironman";
  public age: number = 45;

  get capitalizaName(): string {
    return this.name.toUpperCase();
  }
  getHeroeDescription(): string {
    return `${this.name} ${this.age}`;
  }
  changeHeroeName(): void {
    this.name = 'spiderman';
  }
  changeHeroeAge(): void {
    this.age = 35;
  }
  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
