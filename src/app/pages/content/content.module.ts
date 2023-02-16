import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';

import { SharedModule } from 'src/app/module/shared/shared.module';

@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,

    SharedModule
  ]
})
export class ContentModule { }
