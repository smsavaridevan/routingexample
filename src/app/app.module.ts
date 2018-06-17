import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { NewcompComponent } from './newcomp/newcomp.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { NavComponent } from './nav/nav.component';
import { Page3Component } from './page3/page3.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NewcompComponent,
    Page1Component,
    Page2Component,
    NavComponent,
    Page3Component,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    WelcomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
    {
        path: '',
        component: WelcomeComponent
     },
	  {
         path: 'Page1',
         component: Page1Component
      },
	  {
         path: 'Page2',
         component: Page2Component
      },
    {
        path: 'Page3',
        component: Page3Component
     },
    {
        path: 'Login',
        component: LoginComponent
     },
    {
        path: 'Signup',
        component: SignupComponent
     }
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
