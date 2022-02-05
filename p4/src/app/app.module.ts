import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ColorPickerModule } from '@syncfusion/ej2-angular-inputs';
import { CKEditorModule } from 'ng2-ckeditor';
import {FormsModule} from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddpageComponent } from './addpage/addpage.component';
import { PreviewComponent } from './preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddpageComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ColorPickerModule,
    AngularEditorModule,
    CKEditorModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
