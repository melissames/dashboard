import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plans-list',
  templateUrl: './plans-list.component.html',
  styleUrls: ['./plans-list.component.css']
})
export class PlansListComponent implements OnInit {
  @Input() plans: Plans;
  @Input() photos: Photos;

  constructor() { }

  ngOnInit() {
  }

  // function getRandomPhoto(){
  //   return Math.floor((Math.random()*9)+1);
  // }

}
