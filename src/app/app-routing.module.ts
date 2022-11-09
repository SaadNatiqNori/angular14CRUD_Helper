import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ShowComponent } from './main/user/show/show.component';
import { UserComponent } from './main/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'users',
    children: [
      {
        path: '',
        component: UserComponent,
      },
      {
        path: 'show/:id',
        component: ShowComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
