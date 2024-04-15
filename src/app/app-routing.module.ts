import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './components/directives/directives.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "directives", component: DirectivesComponent},
  {path: "aboutus", component: AboutusComponent},
  {path: "**", redirectTo: '/page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
