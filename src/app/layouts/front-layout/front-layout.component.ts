import { Component, OnInit } from '@angular/core';
import { MatchesService } from '../../services/matches.service';
import { Equipe } from '../../classes/equipe';

@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.css']
})
export class FrontLayoutComponent implements OnInit {


   date:number | undefined ;
   equipe :Equipe[]|any;

  constructor(private ser :MatchesService) { }

  ngOnInit(): void {
    this.date = new Date().getFullYear();
    // this.ser.print();
    this.equipe = this.ser.equipe;
    this.equipe.sort((a:Equipe|any,b:Equipe|any)=>(a.points < b.points) ? 1 :-1)
    this.equipe.forEach((e:Equipe |any)=>console.log(e.nom+" "+e.points))

  }

}
