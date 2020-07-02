import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { ShortStoryComponent } from './short-story/short-story.component';
import { LongStoryComponent } from './long-story/long-story.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    ShortStoryComponent,
    LongStoryComponent
  ]
})
export class PrivateHomeModule {}
