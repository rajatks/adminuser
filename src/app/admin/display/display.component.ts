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
 emp=[];
 index=["id","name", "age","dob","pass","cpass","email"];
  ngOnInit() {
    this.restservice.getallUser()
    .subscribe(
      (response:any)=>this.emp=response
    )
  }



}
