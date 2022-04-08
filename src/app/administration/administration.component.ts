import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Product } from '@app/models/product.model';
import { HelperService } from '@shared/helper.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss'],
})
export class AdministrationComponent implements OnInit {
  constructor(private helper: HelperService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getProducts().subscribe((products: Product[]) => {
      console.log(products);
    });
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.helper.productsUrl);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
