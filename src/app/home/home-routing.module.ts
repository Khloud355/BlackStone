import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import {AllComponent} from './all/all.component';
import{FollowingComponent} from './following/following.component';
import {NewestComponent} from './newest/newest.component';

const routes: Routes = [
  {path:'', component:HomeComponent,
  children:[
    {path:'popular', component:CardComponent},
    {path:'all' , component:AllComponent},
    {path:'newest', component:NewestComponent},
    {path:'follow', component:FollowingComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
