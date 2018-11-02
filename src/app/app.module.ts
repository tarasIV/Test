import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TabMenuModule} from 'primeng/tabmenu';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';




import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HobbiesComponent,
          
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    InputTextModule,
    CardModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
