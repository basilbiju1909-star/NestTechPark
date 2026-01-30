import { Component } from '@angular/core';
import { of } from 'rxjs';
import { Apiservice } from '../../apiservice';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.html',
  styleUrls: ['./product.css'],
})
export class Product {

  product:any[]=[];
  constructor(private apiservice:Apiservice){}
  ngOnInit(){
    this.apiservice.getproduct().subscribe((data:any)=>{
      this.product=data;
      console.log(this.product);
    }
  )}
}
