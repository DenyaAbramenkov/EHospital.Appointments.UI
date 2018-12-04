import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import * as _ from 'lodash';

import { NgModel} from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { AppointmentService } from './Services/appointment.service.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppointmentGridComponent } from './appointment-grid/appointment-grid.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { RightBarComponent } from './right-bar/right-bar.component';
import { AddOrUpdateAppointmentComponent } from './add-or-update-appointment/add-or-update-appointment.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent }
 
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppointmentGridComponent,
    HeaderComponent,
    FooterComponent,
    LeftMenuComponent,
    RightBarComponent,
    AddOrUpdateAppointmentComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
