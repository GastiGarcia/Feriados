import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TabOneComponent} from './components/tab-one/tab-one.component';
import {TabTwoComponent} from './components/tab-two/tab-two.component';

const routes: Routes = [
  { path: '', redirectTo: '/screen-one/tab-one', pathMatch: 'full' },
  { path: 'tab-one', component: TabOneComponent },
  { path: 'tab-two', component: TabTwoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreenTwoRoutingModule { }
