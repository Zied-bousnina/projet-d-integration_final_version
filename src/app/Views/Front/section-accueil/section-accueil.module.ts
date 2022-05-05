import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionAccueilRoutingModule } from './section-accueil-routing.module';
import { SectionAccueilComponent } from './section-accueil/section-accueil.component';


@NgModule({
  declarations: [
    SectionAccueilComponent
  ],
  imports: [
    CommonModule,
    SectionAccueilRoutingModule
  ]
})
export class SectionAccueilModule { }
