import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
username:string="";
pass:string="";
email:string="";
fullname:string="";
  constructor() { }

  ngOnInit(): void {
  }
register (){}
}
