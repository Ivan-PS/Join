import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private subscription: Subscription;
  topicname: any;
  msg: any;
  isConnected: boolean = false;



  constructor(public router: Router) { }

  ngOnInit() {
  }


  goToAboutYou(){
    console.log('inside subscribe new topic');
    this.router.navigate(["/about-you"])
    /*this.subscription = this._mqttService.observe(this.topicname).subscribe((message: IMqttMessage) => {
      this.msg = message;
      console.log('msg: ', message)
    });*/

  }


}
