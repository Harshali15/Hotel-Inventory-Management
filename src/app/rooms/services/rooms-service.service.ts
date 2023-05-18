import { Inject, Injectable } from '@angular/core';
import { RoomsList } from '../rooms';
import { environment } from '../../../environments/environment'
import { APP_CONFIG_SERVICE } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  // headers = new HttpHeaders ({ token: '12345564654sdgfg'});

  //getRoom$ i a stream of data, you can modify only stream of data before subscribing to it
  getRooms$ = this.http.get<RoomsList[]>('/api/rooms').pipe(
    shareReplay(1)
  )

  roomsList: RoomsList[] = []

  constructor(@Inject(APP_CONFIG_SERVICE) private config: AppConfig, private http: HttpClient) {
    // console.log(environment.apiEndpoint)
    console.log(this.config.apiEndpoint)   //now we are getting value from a value provider instead 
    //of directly accessing the environment variable
    console.log('Rooms Service Constructor Called');
  }

  getRooms() {
    // console.log('http get called');
    // console.log(this.http.get<RoomsList[]>('/api/rooms'));
    return this.http.get<RoomsList[]>('/api/rooms'); //we do not need to specify the full url as we have already 
    //specified the base url in the proxy.conf.json file
  }

  addRoom(room: RoomsList) {
    return this.http.post<RoomsList[]>('/api/rooms', room);
  }

  updateRoom(room: RoomsList) {
    // console.log("edit room called")
    return this.http.put<RoomsList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(id: string) {
    console.log('delete room called')
    return this.http.delete<RoomsList[]>(`/api/rooms/${id}`);
  }

  getPhotos() {
    const request = new HttpRequest(
      'GET',
      `https://jsonplaceholder.typicode.com/photos`,
      {
        reportProgress: true,
      }
    );
    return this.http.request(request);
  }

}
