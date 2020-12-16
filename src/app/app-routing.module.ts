import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '',
    component: LoginComponent,
  },
  { path: 'menu',
    component: MainMenuComponent,
  },
  { path: 'supsoc',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
