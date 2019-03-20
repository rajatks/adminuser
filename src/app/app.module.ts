import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RestService } from './rest.service';
import { LogincheckService } from './logincheck.service';
import { CreateComponent } from './admin/create/create.component';
import { UpdateComponent } from './admin/update/update.component';
import { DeleteComponent } from './admin/delete/delete.component';
import { DisplayComponent } from './admin/display/display.component';
import { UserComponent } from './user/user.component';
import { ManagerComponent } from './manager/manager.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RegisterComponent,
    AdminComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    DisplayComponent,
    UserComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [RestService,LogincheckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
