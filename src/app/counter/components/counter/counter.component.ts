import { Component } from "@angular/core";

@Component(
  {
    selector: 'app-counter',
    template: `
        <h4>counter: {{counter}}</h4>
        <button (click)="increaseBy(1)">+1</button>
        <button (click)="resetBy()">Reset</button>
        <button (click)="increaseBy(-1)">-1</button>
    `
  }
)
export class CounterComponent {
  constructor() {

  }

  public counter: number = 10;

  increaseBy(value: number):void {
    this.counter += value;
  }
  resetBy():void{
    this.counter=10;
  }


}
