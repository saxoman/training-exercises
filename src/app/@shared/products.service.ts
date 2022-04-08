import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '@app/models/product.model';
import { HelperService } from '@shared/helper.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private helper: HelperService, private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.helper.productsUrl);
  }
}
