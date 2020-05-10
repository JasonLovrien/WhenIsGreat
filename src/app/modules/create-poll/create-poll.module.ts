/*
* Angular Components
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*
* My Modules and Components
*/
import { CreatePollRoutingModule } from './create-poll-routing.module';
import { CreatePollComponent } from './create-poll.component';
import { SharedModule } from 'src/app/shared/shared.module'


@NgModule({
  declarations: [CreatePollComponent],
  imports: [
    CommonModule,
    CreatePollRoutingModule,
    SharedModule
  ]
})
export class CreatePollModule { }
