import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login.component';
import { KlassenComponent } from './klassen/klassen.component';
import { SchuelerComponent } from './schueler/schueler.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'klassen', component: KlassenComponent },
  { path: 'schueler/:id', component: SchuelerComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
