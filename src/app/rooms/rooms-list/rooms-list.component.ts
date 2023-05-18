import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomsList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit , OnChanges{

  @Input() rooms: RoomsList[] | null = [];  //make roomsList a valid input property on app-rooms-list component

  @Output() selectedRoom = new EventEmitter<RoomsList>(); //make roomsList a valid output property on app-rooms-list component
  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    //throw new Error('Method not implemented.');
    console.log(changes)
  }

  ngOnInit(): void {

  }

  selectRoom(room: RoomsList) {
    this.selectedRoom.emit(room);
  }

  ngOnDestroy(): void {
    console.log("RoomsListComponent destroyed")
  }

}


