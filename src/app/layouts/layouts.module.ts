import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutsComponent } from './admin-layouts/admin-layouts.component';
import { FrontLayoutComponent } from './front-layout/front-layout.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { NotFoundComponent } from './Notfound/not-found/not-found.component';



@NgModule({
  declarations: [

    AdminLayoutsComponent,
    FrontLayoutComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LayoutsModule { }
