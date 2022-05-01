import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-win',
  templateUrl: './win.page.html',
  styleUrls: ['./win.page.scss'],
})
export class WinPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  public goToHome(){
    this.router.navigate(['/home'])
  }

}
