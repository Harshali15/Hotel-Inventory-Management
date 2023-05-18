import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Rooms, RoomsList } from './rooms';
import { RoomsService } from './services/rooms-service.service';
import { Observable, Subject, Subscription, catchError, map } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ConfigserviceService } from '../services/configservice.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy{
  roomList : RoomsList[]= []

  subscription!: Subscription;

  //handling erro
  error$ = new Subject<string>
  getError$ = this.error$.asObservable();


  rooms$ = this.RoomService.getRooms$.pipe(
    catchError(err => {
      this.error$.next(err.message); // dont do this here in your component, use a service instead
      return [];
    })
  )

  priceFilter = new FormControl(0)
  roomsCount$ = this.RoomService.getRooms$.pipe(
    map((rooms) => rooms.length)
  )

  constructor(private RoomService : RoomsService,
    private configService: ConfigserviceService) { 
    //eg of dependency injection
    // this.roomList = this.RoomService.getRooms();
    
  }

  // stream = new Observable((observer) => {
  //   observer.next('user 1');
  //   observer.next('user 2');
  //   observer.next('user 3'); 
  //   observer.complete();
  // });

  //@ViewChild(HeaderComponent, {static : true}) headerComponent!: HeaderComponent;
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  // ngDoCheck(): void {
  //   //console.log('ngDoCheck called')
  // }

  //binding syntax 1- interpolation
  hotelName = 'DoubleTree by Hilton Hotel';

  //binding syntax 2- property binding
  numRooms = 100

  //binding syntax 3- event binding
  hiddenRoom = true;

  toggle() {
    this.hiddenRoom = !this.hiddenRoom;
  }

  totalBytes = 0


  //to demonstrate the use of ngIf
  rooms : Rooms = {
    totalRoom: 100,
    availableRooms: 10,
    bookedRooms: 50,
    //onholdRooms: 5  //comment to see chaining and null collision
  }


  ngOnInit(): void {
    //instead of manually subscribing to the observable, we use async pipe in the template
      // this.RoomService.getRooms$.subscribe(rooms => {
      //     this.roomList = rooms;
      //  })

       

      // this.stream.subscribe((data)=> console.log(data));

      // this.stream.subscribe({
      //   next: (data) => console.log(data),
      //   error: (err) => console.log(err),
      //   complete: () => console.log('completed')
      // });
      

    this.RoomService.getPhotos().subscribe(event=>{
      switch(event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been made!');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request success!')
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log('Done!', event.body);
          break;
        }

      }
    }
    );

    //console.log(this.headerComponent)  //gives undefined if static is false in the header component
    // this.roomList=[
    //   {
    //     roomNumber:1,
    //     roomType:'Deluxe Room',
    //     ammenities: '1 King Bed, Wifi included',
    //     price: 100,
    //     image: 'https://www.hilton.com/im/en/DoubleTree/DoubleTree-By-Hilton-Hotel-Atlanta-Do',
    //     checkinTime: new Date(11-11-2021),
    //     checkoutTime: new Date(12-11-2021),
    //     rating: 4.7
    //   },
    //   {
    //     roomNumber:2,
    //     roomType:'Queen Room',
    //     ammenities: '1 Queen Bed, Wifi included',
    //     price: 200,
    //     image: 'https://www.hilton.com/im/en/DoubleTree/DoubleTree-By-Hilton-Hotel-Atlanta-Do',
    //     checkinTime: new Date(11-11-2021),
    //     checkoutTime: new Date(12-11-2021),
    //     rating:3.12344
    //   },
    //   {
    //     roomNumber:3,
    //     roomType:'Deluxe King Room',
    //     ammenities: '1 King Bed, Wifi included, Free Breakfast',
    //     price: 1000,
    //     image: 'https://www.hilton.com/im/en/DoubleTree/DoubleTree-By-Hilton-Hotel-Atlanta-Do',
    //     checkinTime: new Date(11-11-2021),
    //     checkoutTime: new Date(12-11-2021),
    //     rating:5.0
    //   },
  
    // ]
  }

  //After the view is initialized, or all components are initialized
  ngAfterViewInit(): void {
    // this.headerComponent.title = "Rooms View"
    // console.log(this.headerComponent) 

    // console.log(this.headerChildrenComponent)

    // this.headerChildrenComponent.last.title = "Last Title"
    // this.headerChildrenComponent.forEach((header) => {
    //   console.log(header)
    // }
  }

  //After the view is checked, or all components are checked once, change detection is run once
  ngAfterViewChecked(): void {
   //this.headerComponent.title = "Rooms View2"
    //console.log(this.headerComponent) 
  }

  selectedRoom! : RoomsList;

  selectRoom(room: RoomsList) {
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom() {

    const room : RoomsList={
        roomNumber:'4',
        roomType:'Deluxe Master Room',
        amenities: '1 King Bed, Wifi included',
        price: 1000,
        image: 'https://www.hilton.com/im/en/DoubleTree/DoubleTree-By-Hilton-Hotel-Atlanta-Do',
        checkinTime: new Date(11-11-2021),
        checkoutTime: new Date(12-11-2021),
        rating: 5
    }
    //this.roomList.push(room);
   // this.roomList = [...this.roomList, room];   //... is the spread operator, here you are creating
    // a new array with the old array and the new room

    this.RoomService.addRoom(room).subscribe(data => {  //subscribe to the observable
      this.roomList = data;
    })
  }

  // ngDoCheck(): void {
  //   //console.log('ngDoCheck called')
  // }

  editRoom(){
    const room : RoomsList={
      roomNumber:'3',
      roomType:'Deluxe Master Room',
      amenities: '1 King Bed, Wifi included',
      price: 500,
      image: 'https://www.hilton.com/im/en/DoubleTree/DoubleTree-By-Hilton-Hotel-Atlanta-Do',
      checkinTime: new Date(11-11-2021),
      checkoutTime: new Date(12-11-2021),
      rating: 5
  }

    this.RoomService.updateRoom(room).subscribe(data => {  //subscribe to the observable
      this.roomList = data;
    })
  }

  deleteRoom(){
     this.RoomService.deleteRoom('3').subscribe(data => {  //subscribe to the observable  
      this.roomList = data;
    })
    }


  ngOnDestroy(): void {
    ///you dont need this code, async pipe will do it for you
    // if(this.subscription){
    //   this.subscription.unsubscribe();  //unsubsribing and erase the memory
    // }
    console.log("Rooms Component destroyed")
  }
}
