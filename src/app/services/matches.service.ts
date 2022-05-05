import { Injectable } from '@angular/core';
import { Equipe } from '../classes/equipe';
import { Match } from '../classes/match';
import { Entraineur } from '../classes/entraineur';
import { Joueur } from '../classes/joueur';

@Injectable({
  providedIn: 'root'
})



export class MatchesService {
  matches : Match[]|any = [
    { id_match :"match1", id_equipe1 :"e1", id_equipe2 :"e2", localisation :"M.T", date : "20/06/2022", arbitre :"zied"},
    { id_match :"match2", id_equipe1 :"e2", id_equipe2 :"e3", localisation :"nabeul", date : "20/06/2023", arbitre :"Mariem"}
  ];
  equipe :Equipe[]|any = [
    {id_equipe:"e1", nom:"Liverpool", nomJoueur :["j1", "j2", "j3", "j4", "j5", "j6", "j7", "j8"], id_entraineur :"arbitre1",  played:12 ,points:28 ,won:7 ,lost:5  },
    {id_equipe:"e2", nom:"Chelsea", nomJoueur :["j1", "j2", "j3", "j4", "j5", "j6", "j7", "j8"], id_entraineur :"arbitre2",  played:17 , points:98 , won:9 , lost:8  },
    {id_equipe:"e3", nom:"Norwich City", nomJoueur :["j1", "j2", "j3", "j4", "j5", "j6", "j7", "j8"], id_entraineur :"arbitre3",  played:1 , points:1 , won:1 , lost:1  },
    {id_equipe:"e4", nom:"West born", nomJoueur :["j1", "j2", "j3", "j4", "j5", "j6", "j7", "j8"], id_entraineur :"arbitre4",  played:1 , points:1 , won:1 , lost:1  },
    {id_equipe:"e5", nom:"Sunderland", nomJoueur :["j1", "j2", "j3", "j4", "j5", "j6", "j7", "j8"], id_entraineur :"arbitre5",  played:100 , points:100 , won:1 , lost:1  },

  ];
  entraineur :Entraineur[]|any = [
     { id :"arbitre1", nom: "Zied", prenom :"bousnina", age :"20", tel: "58646232"},
     { id :"arbitre2", nom: "Mariem", prenom :"baccar", age :"21", tel: "55367857"},
     { id :"arbitre3", nom: "Ali", prenom :"mohammad", age :"21", tel: "55367857"},
     { id :"arbitre4", nom: "fathi", prenom :"rezGi", age :"21", tel: "55367857"},
     { id :"arbitre5", nom: "Hassin", prenom :"Ammar", age :"21", tel: "55367857"},
  ]

  joueur :Joueur[]|any =[
    {id_joueur:"j1", nom:"zied", prenom:"", age:"20"},
    {id_joueur:"j2", nom:"aymen", prenom:"", age:"18"},
    {id_joueur:"j3", nom:"ali", prenom:"", age:"23"},
    {id_joueur:"j4", nom:"salah", prenom:"", age:"25"},
    {id_joueur:"j5", nom:"ronaldo", prenom:"", age:"19"},
    {id_joueur:"j6", nom:"messi", prenom:"", age:"22"},
    {id_joueur:"j7", nom:"Hannibal", prenom:"", age:"21"},
    {id_joueur:"j8", nom:"zou", prenom:"", age:"20"},
  ]
  constructor() { }
  i:number|any =0;
  print(){
    this.matches.forEach((e :Match |any)=> {
console.log("---------------------------------------------------------------------------")
      console.log(`Match N° `+this.i)


        const res = this.equipe.find((f :Equipe|any) =>f.id_equipe === e.id_equipe1)
        const res2 = this.equipe.find((f :Equipe|any) =>f.id_equipe === e.id_equipe2)

        // });
        console.log(res)
        console.log(res2)
      console.log(e.id_equipe1)
      console.log(e.id_equipe2)
      console.log(e.localisation)


    });
  }
}
