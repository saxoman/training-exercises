import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@shared/products.service';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '@app/models/product.model';
import { RowContext } from '@angular/cdk/table';
import { ProductModalComponent } from '@app/products/product-modal/product-modal.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteConfirmationModalComponent } from '@app/administration/delete-confirmation-modal/delete-confirmation-modal.component';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products: any;
  displayedColumns: string[] = ['id', 'title', 'description', 'price', 'image', 'quantity', 'action'];
  searchText: string = '';

  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  onEditProduct(event: Event) {
    this.preventDefaultProp(event);
    console.log('edit');
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
    this.router.navigate(['new-product'], { relativeTo: this.route });
  }
  onDeleteProduct(id: number, event: Event) {
    this.preventDefaultProp(event);
    let dialogConfirmation = this.dialog.open(DeleteConfirmationModalComponent);
    dialogConfirmation.beforeClosed;
  }
}
