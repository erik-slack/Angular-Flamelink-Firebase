import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing.routing';

@NgModule({
  imports: [
    CommonModule,

    LandingRoutingModule
  ],
  declarations: [LandingComponent]
})
export class PublicLandingModule {}
