import { Product } from './product';
import { OnInit, Component } from '@angular/core';
import { ProductService } from './product_service';

@Component({
  selector: "product",
  templateUrl: "./product_list.component.html"
})

export class ProductListComponent implements OnInit {

  products: Product[];
  //DI
  constructor(private ps: ProductService) {
  }

  ngOnInit() {
    // let prod1 = new Product(1,"abc",12000,3);
    // let prod2 = new Product(2,"efg",1350,7);
    // let prod3 = new Product(3,"ijk",12553,2);

    // this.products = [prod1, prod2, prod3];

    // this.products = this.ps.retrieveFromServer();
  }

  loadProd(){
    this.products = this.ps.retrieveFromServer();
  }
}