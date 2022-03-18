import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'A Ocon' },
      { id: 12, name: 'S Rosa' },
      { id: 13, name: 'JK Rowling' },
      { id: 14, name: 'Itachi Uchiha' },
      { id: 15, name: 'Madara Uchiha' },
      { id: 16, name: 'Pepe feo' },
      { id: 17, name: 'Guts' },
      { id: 18, name: 'Griffith' },
      { id: 19, name: 'Forsaken' },
      { id: 20, name: 'Lich King' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
