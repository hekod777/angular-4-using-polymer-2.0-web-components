import { Injectable } from '@angular/core';
import * as mediator from 'mediator-js';


function getWindow (): any {
	return window;
}

getWindow().theMediator = new mediator();

function getMediator (): any {
	return getWindow().theMediator;
}

//const theMediator:any = new mediator();

@Injectable()
export class WindowService {


	//theMediator;



	get nativeWindow (): any {
		return getWindow();
	}

	get Mediator ():any {
		return getMediator();
	}

  constructor() { }

}
