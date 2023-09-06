import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { VinylPageComponent } from './components/pages/vinyl-page/vinyl-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path: 'search/:search', component:HomeComponent},
  {path: 'tag/:tag', component:HomeComponent},
  {path: 'vinyl/:id', component:VinylPageComponent},
  {path: 'cart-page', component:CartPageComponent},
  {path: 'login', component:LoginPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
