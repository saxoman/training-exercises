import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '@app/models/product.model';
import { HelperService } from '@shared/helper.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public productsUrl = '/products1';
  constructor(private helper: HelperService, private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<any>('http://localhost:3000/products');
  }
}
