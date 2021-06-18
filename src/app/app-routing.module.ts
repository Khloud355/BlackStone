import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './components/posts/posts.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MessagesComponent } from './components/messages/messages.component';
const routes: Routes = [
  {
    path: 'home', loadChildren: () =>
      import('./home/home.module').then(
        (mod) => mod.HomeModule
      ),
  },
  {
    path: 'messages', component:MessagesComponent
  },
  { path: 'profile', component: ProfileComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'settings', component: SettingsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
