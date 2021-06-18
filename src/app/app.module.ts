import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostsComponent } from './components/posts/posts.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AllComponent } from './home/all/all.component';
// import {ShortenPipePipe} from './shorten-pipe.pipe'


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MessagesComponent,
    ProfileComponent,
    PostsComponent,
    SettingsComponent,
    AllComponent,
    // ShortenPipePipe
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
