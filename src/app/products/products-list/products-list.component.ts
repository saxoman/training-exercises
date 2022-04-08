import { Component, OnInit } from '@angular/core';
import { Product } from '@app/models/product.model';
import { ProductsService } from '@shared/products.service';
import { MatTableDataSource } from '@angular/material/table';
import { RowContext } from '@angular/cdk/table';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: any;
  displayedColumns: string[] = ['id', 'title', 'description', 'price', 'image', 'quantity'];
  searchText: string = '';

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products: Product[]) => {
      console.log(products);
      //this.products= new MatTableDataSource<Product>(products);
      this.products = products;
    });
  }
  showProduct(row: RowContext<any>) {
    console.log(row);
  }
}
