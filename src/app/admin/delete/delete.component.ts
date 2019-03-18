import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private restservice:RestService,private route:Router) { }

  ngOnInit() {
  }
deleteUser(id)
{
  this.restservice.deleteUser(id)
  .subscribe(
    (response:any)=>console.log('deleted sussecessfully'),
    (error)=>console.log('error'),
  )
}
}
