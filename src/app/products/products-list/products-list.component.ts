import { Component, OnInit } from '@angular/core';
import { Product } from '@app/models/product.model';
import { ProductsService } from '@shared/products.service';
import { RowContext } from '@angular/cdk/table';
import { MatDialog } from '@angular/material/dialog';
import { ProductModalComponent } from '@app/products/product-modal/product-modal.component';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: any;
  displayedColumns: string[] = ['id', 'title', 'description', 'price', 'image', 'quantity'];
  searchText: string = '';
  error = null;

  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog,
    private notifierService: NotifierService
  ) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe({
      next: (value) => {
        this.products = value;
      },
      error: (err) => {
        this.error = err;
        this.notifierService.notify('error', `'An error ocured ${err.message}'`);
      },
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
