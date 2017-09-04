import { Injectable } from '@angular/core';

@Injectable()
export class MovieslistService {

	listItems: any[] = ['pax', 'potion', 'leelee']; 

  constructor() { }

  getMovies () {
  	return this.listItems;
  }

}
