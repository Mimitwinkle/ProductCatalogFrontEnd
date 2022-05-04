import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductPayload } from '../product.payload';
import { ProductService } from '../product.service';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  products: ProductPayload[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.productService.getProducts().subscribe({
      next: (response: ProductPayload[]) => {
        this.products = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message)
      }
    })
  }

}
