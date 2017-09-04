import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MovieslistService } from '../services/movieslist/movieslist.service';
import { PolymerChanges } from '@codebakery/origami';
import { WindowService } from '../services/window/window.service';



import * as _ from 'underscore';
//import * as mediator from 'mediator-js';
import * as mediator from 'mediator-js';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

	srcpath: string = 'assets/download.jpeg';
	title: string = 'test title';
	listItems: any[];
	user: string = 'whats going on here';
	beat: string = 'doodidoo';
  private _window: Window;
  private mediator: any;



  constructor(private _movieslist: MovieslistService, window: WindowService, ) { 
  	this.listItems = this._movieslist.getMovies();
    this._window = window.nativeWindow;
    this.mediator = window.Mediator;
  }

  ngOnInit() {
    const theMediator = new mediator();
    theMediator.subscribe("lll", function(){ console.log(arguments); });
  }

  onSelect(){
  	this.user = 'koko';
  	console.log('guagua');
  	console.log(this.user);
  }

  onType(){
  	console.log(this.user);
  }

  onSubmit(){
  	console.log(this.user)
  }

  onKeyup(){
  	console.log('akak');
    //const theMediator = new mediator();
    //theMediator.subscribe("wat2", function(){ console.log(arguments); });
    //console.log(theMediator);
    //console.log(require);
  }

  onSubmit2(){
  	//console.log('submit2');
    this.mediator.subscribe("wat", function(){ console.log(arguments);});
    console.log(this.mediator);
    //console.log();
  }

  @PolymerChanges() isDisabled: boolean;
  @ViewChild('paperButton') paperButton: ElementRef;

  toggleDisabled(){
  	this.paperButton.nativeElement.disabled = !this.paperButton.nativeElement.disabled;
  }
}
