import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { packetApi } from '../../.env';
import * as packetJson from '../assets/json/packet.json';
import * as photoJson from '../assets/json/photos.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Packet Plans';
  // URL = `https://api.packet.net/projects/${packetApi.ID}/plans`;
  plans = packetJson.plans;
  photos = photoJson.photos;


  constructor(private http: HttpClient){
  }

  ngOnInit() {
    // const headers = {
    //   'Access-Control-Allow-Origin': '*',
    //   'X-Auth-Token': packetApi.PACKET_KEY,
    //   'Accept': 'application/json'
    // };
    //
    // return this.http.get(this.URL, {headers: headers})
    //   .subscribe((data: any[]) => this.data = data)

  }

}
