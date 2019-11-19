import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { ShortStoryComponent } from './short-story/short-story.component';
import { LongStoryComponent } from './long-story/long-story.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    ShortStoryComponent,
    LongStoryComponent
  ]
})
export class PrivateHomeModule {}
