import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/login.component';
import { RouterModule, Routes } from '@angular/router';
//mport { APP_ROUTES } from './app.routes';
import { KlassenComponent } from './klassen/klassen.component';
import { StatistikComponent } from '../statistik/statistik.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SchuelerComponent } from './schueler/schueler.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    KlassenComponent,
    StatistikComponent,
    SchuelerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent, LoginComponent, KlassenComponent, StatistikComponent]
})
export class AppModule { }
