import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  productData:{
    name:string;
    brand:string;
    price:string;
  }[]|undefined;
  constructor(private productService : ProductService){

  }
  getProductData(){
    this.productData=this.productService.getProductData();
    console.log(this.productData);
    
  }
  // another way of directly calling without clicking on a button.
  ngOnInit(){
    this.productData=this.productService.getProductData();
    console.log(this.productData);
    
  }
}
