import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingComponent } from './booking.component';
import { ConfigserviceService } from '../services/configservice.service';
import { FormBuilder } from '@angular/forms';
import { BookingService } from './booking.service';
import { ActivatedRoute } from '@angular/router';

describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingComponent ],
      providers: [
        ConfigserviceService,
        FormBuilder,
        BookingService,
        ActivatedRoute

      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
