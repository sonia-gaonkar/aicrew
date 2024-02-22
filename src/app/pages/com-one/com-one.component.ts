import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-com-one',
  templateUrl: './com-one.component.html',
  styleUrls: ['./com-one.component.css']
})
export class ComOneComponent implements OnInit {

  compOneData: any;
  constructor() { }

  ngOnInit() {
  this.compOneData = {'name':'asdasd'};
  }

    
  myFunctionOne(){
    console.log('Comp One console called');
    return 'called'
  }

}