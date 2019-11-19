// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// app
// import { AuthGuard } from '@angular-flamelink/core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }, 
  {
    path: 'home',
    loadChildren: () => import('@angular-flamelink/private/home').then(m => m.PrivateHomeModule),
    // canActivate: [AuthGuard]
  }, 
  {
    path: 'landing',
    loadChildren: () => import('@angular-flamelink/public/landing').then(m => m.PublicLandingModule)
  }, 
  {
    path: 'login',
    loadChildren: () => import('@angular-flamelink/public/login').then(m => m.PublicLoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })]
})
export class AppRoutingModule {}
