import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { StoriesComponent } from './stories/stories.component';
import { LatestpostsComponent } from './latestposts/latestposts.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { NewestComponent } from './newest/newest.component';
import { CardComponent } from './card/card.component';
import { FollowingComponent } from './following/following.component';
import { ShortenPipePipe } from './shorten-pipe.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    StoriesComponent,
    LatestpostsComponent,
    SuggestionsComponent,
    NewestComponent,
    CardComponent,
    FollowingComponent,
    ShortenPipePipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
