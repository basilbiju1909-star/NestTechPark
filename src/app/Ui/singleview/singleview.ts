import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apiservice } from '../../apiservice';

@Component({
  selector: 'app-singleview',
  imports: [],
  templateUrl: './singleview.html',
  styleUrls: ['./singleview.css'],
})
export class Singleview {
  singleproduct:any;
Product: any;
  
  constructor(private route:ActivatedRoute,private apiservice:Apiservice){}
  ngOnInit(){
    //parameter mapping
    const
    productid=this.route.snapshot.paramMap.get('titileid');
    if(productid)
    {
      this.apiservice.getsingleproduct(productid).subscribe((data)=>{
        this.singleproduct=data;
        //console.log(data);
      });


      }
    }
  }



