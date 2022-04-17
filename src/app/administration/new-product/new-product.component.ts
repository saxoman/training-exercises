import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Product } from '@app/models/product.model';
import { ProductsService } from '@shared/products.service';
import { NotifierService } from 'angular-notifier';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private notifierService: NotifierService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  @ViewChild('fileInput') fileInput: ElementRef;
  @ViewChild('postForm') postForm: NgForm;
  fileAttr = 'Choose File';
  productForm: FormGroup;
  buttonPageTitle = 'Create new Product!';

  isImageSaved: boolean;
  cardImageBase64: string;
  id: string;
  editMode = false;

  pricePattern = '^[+-]?\\d+(\\.\\d+)?$';
  quantityPattern = '^[0-9]+$';
  textNumPattern = '^[a-zA-Z0-9.!?\\s]*$';

  productModel: Product = new Product();

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  initForm() {
    if (this.editMode) {
      this.buttonPageTitle = 'Edit Product';
      const product = this.productsService.getProduct(this.id).subscribe((res) => {
        this.productModel.title = res.title;
        this.productModel.price = res.price;
        this.productModel.quantity = res.quantity;
        this.productModel.description = res.description;
        this.productModel.image = res.image;
        this.cardImageBase64 = res.image;
        this.isImageSaved = true;
      });
    }
  }

  onSubmit(formData: Product) {
    formData.image = this.cardImageBase64;
    if (!this.editMode) {
      this.productsService.postProducts(formData).subscribe({
        next: (value) => {
          this.notifierService.notify('success', 'You have successfully added new product');
        },
        error: (error) => {
          this.notifierService.notify('error', `'An error occurred while adding new product ! ${error.message}'`);
        },
      });
      setTimeout(() => {
        this.router.navigate(['/administration/all-products'], { relativeTo: this.route });
      }, 5000);
    } else {
      this.productsService.editProduct(formData, this.id).subscribe({
        next: (value) => {
          this.notifierService.notify('success', 'You have successfully edited product');
        },
        error: (error) => {
          this.notifierService.notify('error', `'An error occurred while editing product ! ${error.message}'`);
        },
      });
      setTimeout(() => {
        this.router.navigate(['/administration/all-products'], { relativeTo: this.route });
      }, 5000);
    }
  }

  uploadFileEvt(imgFile: any): any {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file: any) => {
        this.fileAttr += file.name;
      });
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          let imgBase64Path = e.target.result;
          this.cardImageBase64 = imgBase64Path;
          this.isImageSaved = true;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);
      this.fileInput.nativeElement.value = '';
    } else {
      this.fileAttr = 'Choose File';
    }
  }
}
