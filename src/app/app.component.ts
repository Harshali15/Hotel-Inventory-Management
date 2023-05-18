import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { localStorageToken } from './localstorage.token';
import { InitService } from './init.service';
import { ConfigserviceService } from './services/configservice.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'InventoryMangementApp';
  
  //role= 'User'
  role= 'Admin'

  constructor(@Inject (localStorageToken) private localStorage: any,
   private InitService: InitService,
   private configService: ConfigserviceService,
   private router: Router) {
    console.log("Config from app component")
    console.log(InitService.config)
   }

  @ViewChild('user', {read : ViewContainerRef}) vcr! : ViewContainerRef;
    
  ngAfterViewInit(): void {
    //const ComponentRef = this.vcr.createComponent(RoomsComponent);
    //ComponentRef.instance.numRooms = 35  //change property of the component
  }

  @ViewChild('name', {static : true}) name! : ElementRef;

  ngOnInit(): void {

    // this.router.events.subscribe((event) => 
    //   {
    //     console.log('Event from app component')
    //     console.log(event);
    //   })

    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event) =>
    { 
      console.log(event)
    })

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event) =>
    { 
      console.log(event)
    })

    this.localStorage.setItem('name', 'Hilton Hotel Group') //you can see this on local storage now. dont add anything secure on localstorage as it is not secure     
   // this.name.nativeElement.innerText = "ECENTRAL HOTEL"
  }

}
