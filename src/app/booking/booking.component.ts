import { Component, OnInit } from '@angular/core';
import { ConfigserviceService } from '../services/configservice.service';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators} from '@angular/forms';
import { BookingService } from './booking.service';
import { mergeMap } from 'rxjs';
import { CustomValidators } from './validators/custom-validators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit{

  bookingForm!: FormGroup

  get guests() {
     return this.bookingForm.get('guests') as FormArray;
  }

  constructor(private configService: ConfigserviceService,
    private fb: FormBuilder,
    private bookingService: BookingService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
     const roomid = this.route.snapshot.paramMap.get('roomId');
    // console.log('ROOM ID')
    // console.log(roomid)

    this.bookingForm = this.fb.group({ 
        //roomId: [''], //[''] is a shortcut to new FormControl('')
        roomId: new FormControl(
          {value:roomid,disabled:true}, 
          {validators: [Validators.required]}
          ),
        guestEmail: ['', {validators: [Validators.required, Validators.email]}],
        checkinDate: [''],
        checkoutDate: [''],
        bookingstatus: [''],
        bookingAmount: ['',{validators: [Validators.min(0)]}],
        bookingDate:[''],
        mobileNumber: [''],
        guestName: ['',{validators: [Validators.required, Validators.minLength(3), 
          CustomValidators.ValidateName,
          CustomValidators.ValidateSpecialchar('*')]}],
        address: this.fb.group({
          addressLine1: ['',{validators: [Validators.required]}],
          addressLine2: [''],
          City: ['',{validators: [Validators.required]}],
          State: ['',{validators: [Validators.required]}],
          Country: [''],
          ZipCode: ['',{validators: [Validators.required]}],
        }),
        // guestAddress: [''],
        
        guests: this.fb.array([
          this.addGuestControl(),
        ]),

        TnC: [false, {validators: [Validators.requiredTrue]}],
      },
      { updateOn: 'blur', validators: [CustomValidators.validatedate] });
      

      this.getBookingValues()

      // this.bookingForm.valueChanges.subscribe((data)=> {
      //   console.log(data)
      //   //not the correct way to do this, inside subsribe we are subscribing to the observable
      //   this.bookingService.bookRoom(data).subscribe((data)=>{})
      // }) 


      //use switchMap, exhaustMap also instead of mergeMap and check the difference
      this.bookingForm.valueChanges.pipe(
        mergeMap((data)=> this.bookingService.bookRoom(data)
        
        )).subscribe((data)=>{console.log(data)})

  }

  Booking(){
    //console.log(this.bookingForm.value) //this wont give the disabled value
    console.log(this.bookingForm.getRawValue()) //this will give the disabled value
    

    // this.bookingService.bookRoom(this.bookingForm.value).subscribe((data)=>{
    //   console.log(data)
    // })

    // this.bookingForm.reset({
    //   roomId: '',
    //   guestEmail: '',
    //   checkinDate: '',
    //   checkoutDate: '',
    //   bookingstatus: '',
    //   bookingAmount: '',
    //   bookingDate: '',
    //   mobileNumber: '',
    //   guestName: '',
    //   address: {
    //     addressLine1: '',
    //     addressLine2: '',
    //     City: '',
    //     State: '',
    //     Country: '',
    //     ZipCode: '',
    //   }, 
    //   guests: [],
    //   TnC: false
    // })



  }

  addGuest(){
    this.guests.push (this.addGuestControl())
  }

  addGuestControl(){
    return this.fb.group({
      guestName: ['',{validators: [Validators.required]}], 
       age: new FormControl('',{validators: [Validators.required]})})
  }

  addPassport(){
    this.bookingForm.addControl('passport', new FormControl(''))
  }

  deletePassport(){
    this.bookingForm.removeControl('passport')
  }

  removeGuest(index: number){
    this.guests.removeAt(index)
  }

  getBookingValues(){

    //no need to provide all values
    // this.bookingForm.patchValue({
    //   roomId: '1',
    //   guestEmail: 'har@gmail.com'
    // })

    //need to provide all values
    // this.bookingForm.setValue({
    //   roomId: '1',
    //   guestEmail: '',
    // })
  }

}
 