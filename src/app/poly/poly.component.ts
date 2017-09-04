import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { PolymerChanges } from '@codebakery/origami';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-poly',
  templateUrl: './poly.component.html',
  styleUrls: ['./poly.component.css']
})
// export class PolyComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

export class PolyComponent implements OnInit {
  private _isDisabled: boolean;

  get isDisabled(): boolean {
    return this._isDisabled;
  }

  constructor(private elementRef:ElementRef, private renderer: Renderer2) { 
  	
  }

  ngOnInit() {
    // let global = this.renderer.listen('document', 'click',(evt) => {
    //   console.log('Clicking the document', evt);
    // });
    
    let simple = this.renderer.listen(this.paperButton.nativeElement, 'click', (evt) => {
      console.log('click event on paper button is heard', evt);
    });

    let custom = this.renderer.listen(this.paperButton.nativeElement, 'kick', (evt) => {
      console.log('Angular just saw the custom event "kick" was just fired by a web component!');
    });

    let score = this.renderer.listen(this.paperButton.nativeElement, 'newScore', (event) => {    
      console.log('I heard this new score!');
      console.log(event);
    });

    let score2 = this.renderer.listen(this.paperButton.nativeElement, 'newScore', (event) =>{
      console.log('I heard this new score TWO!');
      this.car = "angular score: " + event.detail.score;
      this.know = "Angular now knows the score! It is: " + event.detail.score;
    })

    // let carouselCustomEvent = this.renderer.listen(this.myCarousel.nativeElement, 'kick', (evt) => {
    //   console.log('a custom kick event was just fired from my carousel web component');
    // });

  }

  public str: string = 'kkk';
  public car: string = 'AG4 YES!';
  public know: string = "Angular doesn't know what the score is.";
  public write: string = '';


  // @PolymerChanges() set isDisabled(value: boolean) {
  //   this._isDisabled = value;
  // }


  @ViewChild('paperButton') paperButton: ElementRef;
  @ViewChild('myCarousel') myCarousel: ElementRef;

  changeAngular () {
    this.car = this.car + 'changed';
  }

  checkCarousel () {
    console.log('my carousel is');
    console.log(this.myCarousel);
    console.log(this.paperButton);
  }

  toggleDisabled() {
  	console.log('jaja');
    this.paperButton.nativeElement.disabled = !this.paperButton.nativeElement.disabled;
  }
}