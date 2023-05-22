import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { RouteConfigToken } from '../services/routeConfig.service';
import { FilterPipe } from './filter.pipe';
import { AppNavigationComponent } from '../app-navigation/app-navigation.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    RoomsBookingComponent,
    RoomsAddComponent,
    FilterPipe,
    AppNavigationComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    HeaderModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    

  ],
  providers: [
    {
      provide : RouteConfigToken,
      useValue : {title : 'Room'}
    },
  ]
})
export class RoomsModule { }
