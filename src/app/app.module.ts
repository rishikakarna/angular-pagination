import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product_list.component';
import { ProductService } from './product/product_service';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent, ProductListComponent, 
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [ProductService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
