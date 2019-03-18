import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Router } from '@angular/router';
import { getDefaultService } from 'selenium-webdriver/chrome';
import { Register } from 'src/app/register/register';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  display:boolean=false;
  register:Register={"id":1,"name":"", "age":1,"dob":"","pass":"","cpass":"","email":""};
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
        dob :new FormControl("",),
        pass:new FormControl("",),
        cpass :new FormControl("",),
        email:new FormControl("",)
      }
    );
  }
  onSubmit(myform)
  {
    
    let register1=new Register(myform.id,myform.name,myform.age,myform.dob,myform.pass,myform.cpass,myform.email)
    this.restservice.putuser(register1,myform.id)
    .subscribe
    (
      (response:any)=>
      {console.log('put susscessful');
      //this.route.navigate(['/admin'])
    }
    )
  }
  
  
  textvalitator(control)
  {
    if(control.value.length>2)
    {
      return {'lastname':false}
    }
  }
  getUser(id1)
  {
    this.restservice.getUser(id1)
    .subscribe
    (
      (response:any)=>
      {
        this.register=response.json();
        this.display=true;
      }
    )

  }

}
