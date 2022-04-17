import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@shared/products.service';
import { MatDialog } from '@angular/material/dialog';
import { RowContext } from '@angular/cdk/table';
import { ProductModalComponent } from '@app/products/product-modal/product-modal.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteConfirmationModalComponent } from '@app/administration/delete-confirmation-modal/delete-confirmation-modal.component';
import { NotifierService } from 'angular-notifier';
import { Product } from '@app/models/product.model';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products: any;
  displayedColumns: string[] = ['id', 'title', 'description', 'price', 'image', 'quantity', 'action'];
  searchText: string = '';
  error = null;

  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
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

  onEditProduct(event: Event, id: String) {
    this.preventDefaultProp(event);
    this.router.navigate(['administration/new-product', id]);
  }

  preventDefaultProp(event: Event) {
    event.stopPropagation();
    event.preventDefault();
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

  onAddNewProduct() {
    this.router.navigate(['/new-product']);
  }

  onDeleteProduct(id: number, event: Event) {
    this.preventDefaultProp(event);
    let dialogConfirmation = this.dialog.open(DeleteConfirmationModalComponent);
    //dialogConfirmation.beforeClosed;
    dialogConfirmation.afterClosed().subscribe((result) => {
      if (result) {
        this.productsService.deleteProduct(id).subscribe(
          (res) => {
            this.ngOnInit();
            this.notifierService.notify('success', 'You have successfully deleted the product !');
          },
          (error) => {
            this.error = error;
            this.notifierService.notify('error', `'An error occurred while deleting the product ! ${error.message}'`);
          }
        );
      } else {
        this.notifierService.notify('info', 'You have canceled the deletion of the product !', '');
      }
    });
  }
}
