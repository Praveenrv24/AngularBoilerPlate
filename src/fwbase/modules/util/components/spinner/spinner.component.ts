import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  @Input() nos; /* Pass count from the component */
  numbers = [];

  constructor() { 
  }

  ngOnInit() {
    this.numbers = this.nos ? this.getCount(this.nos) : this.getCount(1);
    console.log(this.nos);
  }

  getCount(times) {
    const num = Array(times).fill(times).map((x,i)=>i);
    return num;
  }

}
