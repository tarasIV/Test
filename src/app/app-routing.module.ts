import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

const routes: Route[] = [
  {path: 'home', component: HomeComponent},
  {path: 'hobbies', component: HobbiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
    
  
})
export class AppRoutingModule { }
