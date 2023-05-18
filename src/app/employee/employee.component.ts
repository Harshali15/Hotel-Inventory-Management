import { Component } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [RoomsService] //we are creating a new instance of the service, by default it creates a singleton instance
})
export class EmployeeComponent {

  empName: string = 'John';

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {  }
}
