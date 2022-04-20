import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.css']
})
export class FrontLayoutComponent implements OnInit {


   date:number | undefined ;

  constructor() { }

  ngOnInit(): void {
    this.date = new Date().getFullYear();

  }

}
