import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PolymerModule } from '@codebakery/origami';
//import { IronElementsModule, PaperElementsModule } from '@codebakery/origami/lib/collections';
import { IronElementsModule } from '@codebakery/origami/lib/collections';
//import * from '@types/node';
//import * as mediator from 'mediator-js';
//var theMediator = mediator.encode(node);
// const mediator2 = require('mediator-js').Mediator;
// var mediator3 = new mediator2();
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { PolyComponent } from './poly/poly.component';
import { MovieslistService } from './services/movieslist/movieslist.service';
import { WindowService } from './services/window/window.service';
//import {  } from '../assets/my-el';

//declare var mediator: any;

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PolyComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
  	PolymerModule.forRoot(),
    BrowserModule,
    CommonModule,
    FormsModule,
    IronElementsModule,
    //PaperElementsModule,
  ],
  providers: [ 
    MovieslistService,
    WindowService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
