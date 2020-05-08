import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: '404', loadChildren: () => import('./modules/error/error.module').then(m => m.ErrorModule) },
  { path: 'CreatePoll', loadChildren: () => import('./modules/create-poll/create-poll.module').then(m => m.CreatePollModule) },
  { path: '**', redirectTo: '404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
