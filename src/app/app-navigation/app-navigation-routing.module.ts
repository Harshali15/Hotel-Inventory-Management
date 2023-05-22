import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from '../rooms/rooms.component';
import { RoomsBookingComponent } from '../rooms/rooms-booking/rooms-booking.component';
import { EmployeeComponent } from '../employee/employee.component';
import { CommentComponent } from '../comment/comment.component';


const routes: Routes = [
  { path: 'rooms/add', component: RoomsBookingComponent},
  { path: 'rooms', component: RoomsComponent},
  { path: 'employees', component: EmployeeComponent},
  { path: 'comments', component: CommentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppNavigationRoutingModule { }
