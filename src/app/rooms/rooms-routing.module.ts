import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsComponent } from './rooms.component';
import { LoginGuard } from '../guards/login.guard';
import { RoomGuard } from './guards/room.guard';

const routes: Routes = [
  { path: 'rooms/add', component: RoomsBookingComponent},
  { path: '', component: RoomsComponent,
    canActivateChild: [RoomGuard],
    children: [{path: ':id', component: RoomsBookingComponent}],
  },
  // { path: ':id', component: RoomsAddComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
