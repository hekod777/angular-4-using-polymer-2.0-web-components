
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { webcomponentsReady } from '@codebakery/origami';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as mediator from 'mediator-js';

if (environment.production) {
  enableProdMode();
}

webcomponentsReady().then(() => {
	//console.log(mediator);
	//const theMediator = new mediator();

	//mediator.subscribe("wat", function(){ console.log(arguments); });

	//console.log(theMediator);

	platformBrowserDynamic().bootstrapModule(AppModule,{
		enableLegacyTemplate:false
	});
}).catch(error => {
	console.error(error);
})

//platformBrowserDynamic().bootstrapModule(AppModule);
