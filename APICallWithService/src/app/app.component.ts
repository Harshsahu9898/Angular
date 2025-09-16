import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  productList:any
  constructor(private productService:ProductsService){
 
  }
  ngOnInit(){
    this.productService.getProductList().subscribe((data:any)=>{
      console.log(data);
    this.productList=data.products 
    })
  }
}
