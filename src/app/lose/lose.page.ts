import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lose',
  templateUrl: './lose.page.html',
  styleUrls: ['./lose.page.scss'],
})
export class LosePage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  public goToHome(){
    this.router.navigate(['/home'])
  }

}
