import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePollRoutingModule } from './create-poll-routing.module';
import { CreatePollComponent } from './create-poll.component';


@NgModule({
  declarations: [CreatePollComponent],
  imports: [
    CommonModule,
    CreatePollRoutingModule
  ]
})
export class CreatePollModule { }
