import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoteRoutingModule } from './remote-routing.module';
import { RemoteComponent } from './remote-component/remote.component';


@NgModule({
  declarations: [
    RemoteComponent
  ],
  imports: [
    CommonModule,
    RemoteRoutingModule
  ],
  exports: [RemoteComponent]
})
export class RemoteModule { }
