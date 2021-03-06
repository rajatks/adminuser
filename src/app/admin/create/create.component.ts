import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/register/register';
import { RestService } from 'src/app/rest.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  register:Register={"id":1,"name":"","age":1,"desig":"","dob":"","pass":"","cpass":"","email":"","salary":1};
  registers:Register[]=[];
  errorMsg:string="";
  selectedOption:string="";
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
        email:new FormControl("",),
        salary:new FormControl("",)
      }
    );
  }
  selectChangeHandler(event:any){
    this.selectedOption=event.target.value;
     
  }

  onSubmit(myform)
  {
    
    let register1=new Register(myform.id,myform.name,myform.age,this.selectedOption,myform.dob,myform.pass,myform.cpass,myform.email,myform.salary)
    this.restservice.postuser(register1)
    .subscribe
    (
      (response:any)=>
      {console.log('put susscessful');
      this.route.navigate(['/admin'])}
    )
  }
  
  
  textvalitator(control)
  {
    if(control.value.length>2)
    {
      return {'lastname':false}
    }
  }
}
