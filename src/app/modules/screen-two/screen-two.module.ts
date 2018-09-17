import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenTwoRoutingModule } from './screen-two-routing.module';
import { ScreenTwoComponent } from './screen-two.component';
import { TabOneComponent } from './components/tab-one/tab-one.component';
import { TabTwoComponent } from './components/tab-two/tab-two.component';
@NgModule({
  imports: [
    CommonModule,
    ScreenTwoRoutingModule
  ],
  declarations: [ScreenTwoComponent, TabTwoComponent, TabOneComponent]
})
export class ScreenTwoModule { }
