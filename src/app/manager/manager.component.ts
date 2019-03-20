import { Component, OnInit } from '@angular/core';
import { Register } from '../register/register';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  display:boolean=false;
  register:Register={"id":1,"name":"", "age":1,"desig":"","dob":"","pass":"","cpass":"","email":"","salary":1};
  registers:Register[]=[];
  form;
  constructor(private restservice:RestService,private route:Router) { }
  ngOnInit() {
  
    this.form=new FormGroup(
      {
        id : new FormControl("",),
        salary:new FormControl("",)
      }
    );
  }
  sal:number;
  onSubmit(myform)
  {
    this.restservice.getUser(myform.id)
    .subscribe
    (
      (response:any)=>
      {
        this.register=response.json();
        this.display=true;
        this.sal=parseInt(this.register.salary.toString());
        this.sal+=parseInt(myform.salary);
        console.log(this.sal);
        this.register.salary=this.sal;
        this.restservice.putuser(this.register,myform.id)
        .subscribe((response:any)=>
        console.log('put successfully'));

      }
    )

  }


}
