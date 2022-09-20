import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../account/login.component';
import { RouterModule, Routes } from '@angular/router';
//mport { APP_ROUTES } from './app.routes'; 
import { KlassenComponent } from '../klassen/klassen.component';
import { StatistikComponent } from '../statistik/statistik.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: LoginComponent }, //login
  { path: 'klassen', component: KlassenComponent },
  { path: 'statistik', component: StatistikComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    KlassenComponent,
    StatistikComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    //NgModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, LoginComponent, KlassenComponent, StatistikComponent]
})
export class AppModule { }
