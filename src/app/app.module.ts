import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AuthService } from './services/authService/auth.service';
import { AppConfiguration } from './app-constant.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorDisplayComponent } from './error-display/error-display.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Calendar } from './calendar/calendar.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { DataTableModule } from 'angular5-data-table';
import { TableComponent } from './table/table.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ErrorDisplayComponent,
    NavbarComponent,
    Calendar,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng4LoadingSpinnerModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FullCalendarModule,
    DataTableModule
  ],
  providers: [AuthGuardService, AuthService, AppConfiguration],
  bootstrap: [AppComponent]
})
export class AppModule { }
