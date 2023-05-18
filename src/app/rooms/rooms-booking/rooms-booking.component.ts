import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent implements OnInit {

  // id$ = this.router.params.pipe(
  //   map((params) => params['id'])
  //   )

  id$ = this.router.paramMap.pipe(
    map((params) => params.get('id'))
    )
    
  id!: number
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
   
    //snapshots will never update the data in case you are changing the value being in the same view, 
    //problematic with child components
    // this.id = this.router.snapshot.params['id']

    //subscribe to the params observable
    // this.router.params.subscribe((params) => {
    //   //console.log(params)
    //   this.id= params['id']
    // })

    // this.id$ = this.router.params.pipe(
    //   map((params) => params['id'])
    //   )

  }

}


