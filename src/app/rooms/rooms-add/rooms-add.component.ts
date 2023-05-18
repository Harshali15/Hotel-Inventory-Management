import { Component, OnInit } from '@angular/core';
import { RoomsList } from '../rooms';
import { RoomsService } from '../services/rooms-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent implements OnInit{

  room: RoomsList = {
    roomType: "",
    amenities: "",
    checkinTime: new Date(),
    checkoutTime: new Date(),
    image: "",
    price: 0,
    rating: 0,
  }

  successMessage: string = "";

  constructor(private RoomsService: RoomsService) { }

  ngOnInit(): void {
  }

  AddRoom(roomsForm : NgForm) {
    this.RoomsService
      .addRoom(this.room)
      .subscribe(
        (data) => 
          {
            this.successMessage="Room added successfully",
            //roomsForm.reset();
            roomsForm.resetForm(
              {  roomType: "",
              amenities: "",
              checkinTime: new Date(),
              checkoutTime: new Date(),
              image: "",
              price: 0,
              rating: 0}
            );

          })
    // console.log(data)
  }
    
}
