import { Geolocation } from '@ionic-native/geolocation/ngx';

import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { WebSocketServer } from 'ws';

import { BehaviorSubject, Observable } from 'rxjs';
import { WSA_E_CANCELLED } from 'constants';
import { Router } from '@angular/router';


@Component({
  selector: 'app-in-game',
  templateUrl: './in-game.page.html',
  styleUrls: ['./in-game.page.scss'],
})


export class InGamePage implements OnInit {

  seflCode = "";
  otherDesc = ""
  selfId: any;
  otherId: any;

  input = "";
  otherCode = "";

  time = "";
  timeInt = 300;
  timeStr = "00:00"

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

  constructor(public UserServiceService: UserServiceService, public geolocation: Geolocation, public http: HttpClient, public router: Router) { 



  }

  ngOnInit() {

    this.UserServiceService.userInfo.subscribe(data =>{
      this.seflCode = data.userCode;
      this.selfId = data.userId;

    });
    this.UserServiceService.otherUserInfo.subscribe(data =>{
      this.otherDesc = data['desc'];
      this.otherId = data.userId;
      this.otherCode = data["userCode"];
    })
    this.coords.subscribe(data =>{
      this.distance = data.selfLat
    })
    console.log(this.UserServiceService.staticOtherInfo.desc);
    
    this.otherDesc = this.UserServiceService.staticOtherInfo.desc;

    var tryUpdate = setInterval(() => {


      this.updateSelfGeo();


    }, 5000);

    var time = setInterval(() => {


      this.updateTime();

    }, 1000);



    

  }

  public updateTime(){
    this.timeInt = this.timeInt - 1;
    var min = Math.floor(this.timeInt/60);
    var minStr = min.toString();
    if(min <= 9){
       minStr = ("0"+min.toString()).toString();
    }
    var seconds = this.timeInt -(min * 60);
    var secondsStr = seconds.toString();
    if(seconds <= 9){
      secondsStr = ("0"+seconds.toString()).toString();
   }

   this.time = minStr +":"+secondsStr;

   if(this.timeInt <= 0){
    this.router.navigate(['lose']);
   }

  }

  public updateSelfGeo(){
    this.geolocation.getCurrentPosition().then((resp) => {
      var latitude = resp.coords.latitude;
      var longitude = resp.coords.longitude;
      var userId = this.selfId;
      var otherId = this.otherId;


      

      
      var iUrl = "http://65.108.253.229:8000/update_info?user_id="+userId+"&lat="+latitude+ "&lon="+longitude;
      this.http.post(iUrl, JSON.stringify({})).subscribe(data =>{
        console.log("UPDATE GEo");
        var iUrl2 = "http://65.108.253.229:8000/get_distance?user1_id="+userId+"&user2_id="+otherId;
        this.http.get(iUrl2).subscribe(data =>{
          this.distance = parseFloat(parseFloat(data["dist"]).toFixed(2));
        })

      })

     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }


public checkPerson(){
  console.log(this.otherCode);
  
  if (this.input === this.otherCode) {

    var iUrl = "http://65.108.253.229:8000/set_win?user_id="+this.otherId
    this.http.get(iUrl).subscribe(data =>{
      console.log("win");
      this.router.navigate(['/win']);
    })

  }
}

public checkInWin(){

    var iUrl = "http://65.108.253.229:8000/see_win?user_id="+this.otherId
    this.http.get(iUrl).subscribe(data =>{
      console.log(data['state']);
      // this.router.navigate(['/win']);
    })

  
}



}
