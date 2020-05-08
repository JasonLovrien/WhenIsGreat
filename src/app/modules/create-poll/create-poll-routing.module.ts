import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePollComponent } from './create-poll.component';

const routes: Routes = [{ path: '', component: CreatePollComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePollRoutingModule { }
