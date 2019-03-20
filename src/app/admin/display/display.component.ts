import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private restservice:RestService,private route:Router) { }
  as:boolean;
 emp=[];
 index=["id","name", "age","desig","dob","pass","cpass","email","salary"];
  ngOnInit() {
    this.restservice.getallUser()
    .subscribe(
      (response:any)=>this.emp=response
    )
  }
  toggle()
  {
    this.route.navigate(['/admin'])
  }



}
