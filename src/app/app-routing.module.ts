import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/screen-one/tab-one', pathMatch: 'full' },
  { path: 'screen-one', loadChildren: './modules/screen-one/screen-one.module#ScreenOneModule' },
  { path: 'screen-two', loadChildren: './modules/screen-two/screen-two.module#ScreenTwoModule' },
  { path: '**', redirectTo: '/screen-one/tab-one', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
