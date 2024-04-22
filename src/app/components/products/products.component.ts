import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  private productService = inject(ProductsService);

  ngOnInit(): void {
    this.products = this.productService.getAllProducts()
  }
}
