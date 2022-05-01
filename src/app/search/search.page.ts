import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  router: any;
  constructor(router: Router) {
    this.router = router
   }
  ngOnInit() {
    // new Promise(resolve => setTimeout(resolve, 3000));

    
    
  }


}
