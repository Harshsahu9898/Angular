import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { 
    console.log("Product Service");
  }
  getProductData(){
    return[
      {
        name:'mobile',
        brand:'mi',
        price:'20000'
      },
      {
        name:'Laptop',
        brand:'Apple',
        price:'2000000'
      },
      {
        name:'Kidney',
        brand:'Human',
        price:'2000000000000'
      }

    ]
  }
}
