import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserServiceService } from '../service/user-service.service';


@Component({
  selector: 'app-about-you',
  templateUrl: './about-you.page.html',
  styleUrls: ['./about-you.page.scss'],
})
export class AboutYouPage implements OnInit {
  description: String;
  router: any;
  constructor(router: Router, private http: HttpClientModule, public userService: UserServiceService) {
    this.router = router
   }

  ngOnInit() {
  }

  goToSearch(){

    this.router.navigate(['/search']);
    var iUrl = "http://192.168.9.227:8000/start?description="+this.description;
    this.userService.startSearch(this.description);
  }

  public generateNumber(min, max){
   return  Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
