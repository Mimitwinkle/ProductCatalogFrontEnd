import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductPayload } from './product.payload';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<ProductPayload[]> {
    return this.http.get<ProductPayload[]>(`${this.apiServerUrl}/products`);
  }
}
