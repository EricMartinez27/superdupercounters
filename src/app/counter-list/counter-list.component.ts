import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter';

@Component({
  selector: 'counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {

  name= 'Counter Wall';
  counters: Counter[] = [];



  create(){
    let totalValue = 0;
    for(let counter of this.counters){
      totalValue += counter.value;
    }
    let counter = new Counter(totalValue);

    this.counters.push(counter);
  }

  constructor() {

   }

  ngOnInit(): void {
  }

}
