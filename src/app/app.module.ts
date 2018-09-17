import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SERVICES } from './services';
import { TablaComponent } from './tabla/tabla.component';
import {FormsModule, FormGroup, Validators} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    BrowserModule,
        AppRoutingModule,
        HttpModule,
        HttpClientModule,
        FormsModule,
    ],
  providers: [
    ...SERVICES
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  MatFormFieldModule;
 }
