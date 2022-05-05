import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { NotFoundComponent } from './layouts/Notfound/not-found/not-found.component';

const routes: Routes = [
  {path:"",component: FrontLayoutComponent, children: [
    {path:"", loadChildren: ()=>import("./Views/Front/section-accueil/section-accueil.module").then(m=>m.SectionAccueilModule)},
    {path:"team", loadChildren: ()=>import("./Views/Front/team/team.module").then(m=>m.TeamModule)},
    {path:"about", loadChildren: ()=>import("./Views/Front/about/about.module").then(m=>m.AboutModule)},
    {path:"contact", loadChildren: ()=>import("./Views/Front/contact/contact.module").then(m=>m.ContactModule)}
  ]},
  {path:"**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
