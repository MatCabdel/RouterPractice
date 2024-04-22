import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {

  products!: Product


private productsService = inject(ProductsService);
private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.products = this.productsService.getProduct(id)
  }

}
