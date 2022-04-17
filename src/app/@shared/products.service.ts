import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Product } from '@app/models/product.model';
import { HelperService } from '@shared/helper.service';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public productsUrl = 'http://localhost:3000/products';
  constructor(private helper: HelperService, private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      map((responseData: Product[]) => {
        return responseData;
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
  getProduct(id: string) {
    return this.http.get<Product>(this.productsUrl + '/' + id).pipe(
      map((responseData) => {
        return responseData;
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
  deleteProduct(id: number) {
    return this.http.delete<Product>(this.productsUrl + '/' + id).pipe(
      map((responseData) => {
        return responseData;
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
  postProducts(data: Product) {
    return this.http.post(this.productsUrl, data).pipe(
      map((responseData) => {
        return responseData;
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
  editProduct(data: Product, id: string) {
    data.id = id;
    console.log(data);
    return this.http.put(this.productsUrl + '/' + id, data).pipe(
      map((responseData) => {
        return responseData;
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
