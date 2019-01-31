import { Product } from './product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';

@Injectable() //DI
export class ProductService {
  products: Product[];

  //injecting Angular's HttpClient API
  constructor(private http: HttpClient) {
  }

  sendToServer(product: Product) {
    //our code to communicate with server will be here
  }

  retrieveFromServer(): Product[] {
    //our code to communicate with server will be here
    let url = 'http://localhost:8081/pagination-ajax/ProductControllerServlet';
    // alert('hi');

    this.http.get<Product[]>(url).subscribe(
      data => {
        this.products = data;
      });
    return this.products;

    // let prod1 = new Product(1,"amar",12000,3);
    // let prod2 = new Product(2,"efg",1350,7);
    // let prod3 = new Product(3,"ijk",12553,2);
    // let products = [prod1, prod2, prod3];
    // return products;
  }
}