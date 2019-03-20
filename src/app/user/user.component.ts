import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { Register } from '../register/register';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  display:boolean=false;
  register:Register={"id":1,"name":"", "age":1,"desig":"","dob":"","pass":"","cpass":"","email":"","salary":1};
  registers:Register[]=[];
  form;
  constructor(private restservice:RestService,private route:Router) { }

  
  ngOnInit() {
    this.form=new FormGroup(
      {
        id : new FormControl("",Validators.compose([
          Validators.required,
          Validators.maxLength(5),
          Validators.minLength(1)
        ])),
        name: new FormControl("",Validators.compose([
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(5),
          Validators.pattern('[\\w\\-\\s\\/]+')
        ])),
        age: new FormControl("",this.textvalitator),
        desig:new FormControl("",),
        dob :new FormControl("",),
        pass:new FormControl("",),
        cpass :new FormControl("",),
        email:new FormControl("",),
        salary:new FormControl("",)
      }
    );
  }
  textvalitator(control)
  {
    if(control.value.length>2)
    {
      return {'lastname':false}
    }
  }

  toggle()
  {
    console.log(this.restservice.getid());
    this.restservice.getUser(this.restservice.getid())
    .subscribe((response:any)=>this.register=response.json())
    console.log(this.register);
    this.display=!this.display;
  }
  onSubmit(myform)
  {
    
    let register1=new Register(myform.id,myform.name,myform.age,myform.desig,myform.dob,myform.pass,myform.cpass,myform.email,myform.salary)
    this.restservice.putuser(register1,myform.id)
    .subscribe
    (
      (response:any)=>
      {console.log('Show susscessful');
      this.route.navigate([''])
    }
    )
  }
  

}
