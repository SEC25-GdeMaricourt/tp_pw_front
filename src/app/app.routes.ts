import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserComponent } from './components/user/user.component';
import { FooterComponent } from './components/footer/footer.component';


const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent    
  },
  {
    path: 'signup',
    component: SignupComponent    
  },
  {
    path: 'user',
    component: UserComponent    
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'footer',
    component: FooterComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }