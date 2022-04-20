import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutsComponent } from './admin-layouts/admin-layouts.component';
import { FrontLayoutComponent } from './front-layout/front-layout.component';



@NgModule({
  declarations: [
    AdminLayoutsComponent,
    FrontLayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
