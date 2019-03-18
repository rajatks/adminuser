import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AdminComponent } from './admin/admin.component';
import { CreateComponent } from './admin/create/create.component';
import { DisplayComponent } from './admin/display/display.component';
import { UpdateComponent } from './admin/update/update.component';
import { DeleteComponent } from './admin/delete/delete.component';

const routes: Routes = [
  {
    path:'',
    component:IndexComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'admin/create',
    component:CreateComponent
  },
  {
    path:'admin/display',
    component:DisplayComponent
  },
  {
    path:'admin/update',
    component:UpdateComponent
  },
  {
    path:'admin/delete',
    component:DeleteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
