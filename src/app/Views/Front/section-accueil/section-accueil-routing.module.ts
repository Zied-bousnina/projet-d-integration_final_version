import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionAccueilComponent } from './section-accueil/section-accueil.component';

const routes: Routes = [
  {path:"", component: SectionAccueilComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionAccueilRoutingModule { }
