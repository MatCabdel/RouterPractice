import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './components/directives/directives.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "directives", component: DirectivesComponent},
  {path: "aboutus", component: AboutusComponent},
  {path: "products", component: ProductsComponent},
  {path: "products/product/:id", component: ProductDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
