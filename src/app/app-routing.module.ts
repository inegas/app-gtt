import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginViewComponent } from './login-view/login-view.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { BoardComponent } from './board/board.component';
import { JiraFormsComponent } from './jira-forms/jira-forms.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {
    path: 'login', component: LoginViewComponent,
  },
  {
    path: 'register', component: RegisterViewComponent,
  },
  {
    path: 'board', component: BoardComponent,
  },
  {
    path: 'jira', component: JiraFormsComponent,
  },
  {
    path: 'cargar', component: UploadComponent,
  },
  {
    //First page user see in her explorer
    path: '**', redirectTo: '/login', pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
