import { Product } from './product';
import { OnInit, Component } from '@angular/core';
import { ProductService } from './product_service';

@Component({
  selector: "product",
  templateUrl: "./product_list.component.html"
})

export class ProductListComponent implements OnInit {

  products: Product[];
  currentPosition : number = 1;
  pageSize : number = 5;
  //DI amaar
  constructor(private ps: ProductService) {
  }

  ngOnInit() {
    // let prod1 = new Product(1,"abc",12000,3);
    // let prod2 = new Product(2,"efg",1350,7);
    // let prod3 = new Product(3,"ijk",12553,2);

    // this.products = [prod1, prod2, prod3];

    // this.products = this.ps.retrieveFromServer();
  }

  loadProd() {
    this.currentPosition += this.pageSize;
    let url = 'http://localhost:8081/pagination-ajax/ProductControllerServlet2?cp='+this.currentPosition;
    this.ps.retrieveFromServer(url).subscribe(
      data => {
        this.products = data;
      });;
  }
  loadnextProd() {
    this.currentPosition += this.pageSize;
    let url = 'http://localhost:8081/pagination-ajax/ProductControllerServlet2?cp='+this.currentPosition;
    this.ps.retrieveFromServerNext(url).subscribe(
      data => {
        this.products = data;
      });;
  }
  loadprevProd() {
    this.currentPosition -= this.pageSize;
    let url = 'http://localhost:8081/pagination-ajax/ProductControllerServlet2?cp='+this.currentPosition;
    this.ps.retrieveFromServerPrev(url).subscribe(
      data => {
        this.products = data;
      });;
  }
}