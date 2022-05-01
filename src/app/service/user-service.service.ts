import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  public startGameInfo = new BehaviorSubject({});
  public staticSelfInfo = {'userId': 0, 'userCode': 0, 'coords': [], 'desc': ""};
  public staticOtherInfo = {'userId': 0, 'userCode': 0, 'coords': [], 'desc': ""};
  public userInfo = new BehaviorSubject({'userId': 0, 'userCode': 0, 'coords': [], 'desc': ""});
  public otherUserInfo = new BehaviorSubject({'userId': 0, 'userCode': 0, 'coords': [], 'desc': ''});

  constructor(public http: HttpClient, public router: Router) { }

  startSearch(description){
    
    var flag = true;
    var iArr = "{'description': 'aa'}";
    
    var httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    var iUrl = "http://192.168.9.227:8000/start?description="+description;
    this.http.post(iUrl, JSON.stringify({})).subscribe(data=>{
      console.log(data);
      this.userInfo.next({'userId': data["user_id"], 'userCode':  data['user_code'], 'coords': [], desc: ''});
      iUrl = "http://192.168.9.227:8000/ask_game?user_id="+data["user_id"];
      this.startGameInfo.subscribe(dataEnd=>{
        if(dataEnd !== undefined){

          if(dataEnd["found"] == true){
            this.otherUserInfo.next({'userId': dataEnd['user_id'], 'userCode': dataEnd['user_code'], 'coords': [], desc: dataEnd['desc']})
            this.staticOtherInfo = {'userId': dataEnd['user_id'], 'userCode':  dataEnd['user_code'], 'coords': [], desc: dataEnd['desc']};
            clearInterval(tryAskGme);
            this.router.navigate(['/in-game']);
          }
        }
      })
      var tryAskGme = setInterval(() => {


        this.searchGame(iUrl);

      }, 3000);
    });
  }

  

  searchGame(iUrl){
    let dataToRes: any
    console.log("aqui qui qui ");
      this.http.post(iUrl, JSON.stringify({})).subscribe(data =>{
        console.log("ASK GAME");
        // console.log(data);
        this.startGameInfo.next(data);
      });
  }



  public delay(milliseconds : number) {
    return new Promise(resolve => setTimeout( resolve, milliseconds));
  }   
  public generateNumber(min, max){
    return  Math.floor(Math.random() * (max - min + 1)) + min;
   }

}
