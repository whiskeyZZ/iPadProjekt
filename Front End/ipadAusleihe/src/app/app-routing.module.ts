import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/account/login.component';
import { KlassenComponent } from '../klassen/klassen.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'klassen', component: KlassenComponent },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
