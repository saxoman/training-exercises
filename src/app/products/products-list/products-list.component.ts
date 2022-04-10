import { Component, OnInit } from '@angular/core';
import { Product } from '@app/models/product.model';
import { ProductsService } from '@shared/products.service';
import { RowContext } from '@angular/cdk/table';
import { MatDialog } from '@angular/material/dialog';
import { ProductModalComponent } from '@app/products/product-modal/product-modal.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: any;
  displayedColumns: string[] = ['id', 'title', 'description', 'price', 'image', 'quantity'];
  searchText: string = '';

  constructor(private productsService: ProductsService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  showProduct(row: RowContext<any>) {
    let dialogRef = this.dialog.open(ProductModalComponent, {
      width: '60%',
      data: row,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
