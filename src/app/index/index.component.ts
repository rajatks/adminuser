import { Component, OnInit } from '@angular/core';
import { Register } from '../register/register';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LogincheckService } from '../logincheck.service';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  form;
  disp1:boolean=true;
  disp2:boolean=false;
  errorMsg:string="";
 us:string="admin";
 ps:string="admin";
  register:Register={"id":1,"name":"", "age":1,"desig":"","dob":"","pass":"","cpass":"","email":"","salary":1};
  registers:Register[]=[];
  selectedOption:string="";
 
  constructor(public lc:LogincheckService,private route:Router,private restservice:RestService,) { }
  
  selectChangeHandler(event:any){
    this.selectedOption=event.target.value;
     
  }



  ngOnInit() {
    this.form=new FormGroup(
      {
        userid:new FormControl("",Validators.required),
        pass1:new FormControl("",Validators.required)
      }
    )
  }
     
  onSubmit(myform){

    
    this.restservice.getUser(myform.userid)
    .subscribe(
      (response)=>{
        this.register=response.json()
        if(myform.userid==this.register.id && myform.pass1==this.register.pass && this.selectedOption=="users"){
          this.disp1=!this.disp1;
          this.disp2=!this.disp2;
          console.log('successfully');
          this.lc.setlogin(true);
            this.restservice.setid(myform.userid);
            console.log(myform.userid);
            console.log(this.restservice.getid());
          this.route.navigate(['/user'])

        }
        if(myform.userid==this.us && myform.pass1==this.ps && this.selectedOption=="admin"){
          this.disp1=!this.disp1;
          this.disp2=!this.disp2;
          console.log('successfully');
            this.lc.setlogin(true);
            this.restservice.setid(myform.userid);
          this.route.navigate(['admin'])
        }
        if(myform.userid==this.register.id && myform.pass1==this.register.pass && this.selectedOption=="manager"){
          this.disp1=!this.disp1;
          this.disp2=!this.disp2;
          console.log('successfully manager');
            this.lc.setlogin(true);
            this.restservice.setid(myform.userid);
          this.route.navigate(['manager'])
        }
        else{
          this.errorMsg="Record Is Not Fount please Fill Correct User Id and Password";
        }
      }
    )
  }

}
