import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { CKEditorModule } from 'ng2-ckeditor';
@Component({
  selector: 'app-addpage',
  templateUrl: './addpage.component.html',
  styleUrls: ['./addpage.component.css']
})
export class AddpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  CKEDITOR.editorConfig=function (config){
  			config.toolbar	=[
  							{name:'clipboard',items:['Cut','Copy','Paste']
  							}
  			];
  				
  };
ckeditorContent:any;
}
