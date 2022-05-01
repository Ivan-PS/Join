import { Geolocation } from '@ionic-native/geolocation/ngx';

import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { WebSocketServer } from 'ws';

import { BehaviorSubject, Observable } from 'rxjs';
import { WSA_E_CANCELLED } from 'constants';


@Component({
  selector: 'app-in-game',
  templateUrl: './in-game.page.html',
  styleUrls: ['./in-game.page.scss'],
})


export class InGamePage implements OnInit {

  seflCode = 0;
  otherDesc = ""
  selfId: any;
  otherId: any;

  distance = 0

  coords = new BehaviorSubject({
    selfLat: 0.0,
    selfLon: 0.0,
    otherLat: 0.0,
    otherLon: 0.0
  });
  staticCoords = {
    selfLat: 0.0,
    selfLon: 0.0,
    otherLat: 0.0,
    otherLon: 0.0
  };

  private socket;

  constructor(public UserServiceService: UserServiceService, public geolocation: Geolocation, public http: HttpClient) { 



  }

  ngOnInit() {

    this.UserServiceService.userInfo.subscribe(data =>{
      this.seflCode = data.userCode;
      this.selfId = data.userId;

    });
    this.UserServiceService.otherUserInfo.subscribe(data =>{
      this.otherDesc = data['desc'];
      this.otherId = data.userId;
    })
    this.coords.subscribe(data =>{
      this.distance = data.selfLat
    })
    console.log(this.UserServiceService.staticOtherInfo.desc);
    
    this.otherDesc = this.UserServiceService.staticOtherInfo.desc;

    var tryUpdate = setInterval(() => {


      this.updateSelfGeo();

    }, 5000);



    

  }

  public updateSelfGeo(){
    this.geolocation.getCurrentPosition().then((resp) => {
      var latitude = resp.coords.latitude;
      var longitude = resp.coords.longitude;
      var userId = this.selfId;
      var otherId = this.otherId;


      

      
      var iUrl = "http://192.168.9.227:8000/update_info?user_id="+userId+"&lat="+latitude+ "&lon="+longitude;
      this.http.post(iUrl, JSON.stringify({})).subscribe(data =>{
        console.log("UPDATE GEo");
        var iUrl2 = "http://192.168.9.227:8000/get_distance?user1_id="+userId+"&user2_id="+otherId;
        this.http.post(iUrl2, JSON.stringify({})).subscribe(data =>{
          this.distance = data["dist"];
        })

      })

     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }





}
