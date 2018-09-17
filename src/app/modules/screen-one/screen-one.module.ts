import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ScreenOneRoutingModule } from './screen-one-routing.module';
import { ScreenOneComponent } from './screen-one.component';
import { TabOneComponent } from './components/tab-one/tab-one.component';
import { TabTwoComponent } from './components/tab-two/tab-two.component';

@NgModule({
  imports: [
    CommonModule,
    ScreenOneRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ScreenOneComponent, TabTwoComponent, TabOneComponent],
  bootstrap: [ScreenOneComponent]
})
export class ScreenOneModule { }
