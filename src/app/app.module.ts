import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER, ErrorHandler } from '@angular/core';
// import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { APP_CONFIG, APP_CONFIG_SERVICE } from './AppConfig/appconfig.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';
import { EmailvalidatorDirective } from './emailvalidator/emailvalidator.directive';
// import { RoomsModule } from './rooms/rooms.module';
import { HeaderModule } from './header/header.module';
import { RouteConfigToken } from './services/routeConfig.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { GlobalErrorHandler } from './errorhandler.service';
import {MatCardModule} from '@angular/material/card';

function initFactory(initService:InitService){
  return () => initService.init();

}
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    EmployeeComponent,
    AppNavigationComponent,
    NotfoundComponent,
    LoginComponent,
    HoverDirective,
    EmailvalidatorDirective
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    // RoomsModule,
    HeaderModule,
    AppRoutingModule,
     MatSnackBarModule,
     MatCardModule
     
  ],
  providers: [
    {
      provide : APP_CONFIG_SERVICE,
      useValue : APP_CONFIG
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass : RequestInterceptor,
      multi : true
    },
    {
      provide: APP_INITIALIZER, 
      useFactory: initFactory, 
      deps: [InitService],
      multi: true,
    },
    {
      provide : RouteConfigToken,
      useValue : {title : 'Home'}
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler 
    }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})

export class AppModule { }
