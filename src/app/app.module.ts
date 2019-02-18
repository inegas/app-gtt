import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { BoardComponent } from './board/board.component';
import { LogoutComponent } from './logout/logout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JiraFormsComponent } from './jira-forms/jira-forms.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CertificateComponent } from './certificate/certificate.component';
import { ShowCertificateComponent } from './show-certificate/show-certificate.component';
import { UploadComponent } from './upload/upload.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    RegisterViewComponent,
    BoardComponent,
    LogoutComponent,
    NavbarComponent,
    JiraFormsComponent,
    CertificateComponent,
    ShowCertificateComponent,
    UploadComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
