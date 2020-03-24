import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopcode',
  templateUrl: './shopcode.page.html',
  styleUrls: ['./shopcode.page.scss'],
})
export class ShopcodePage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }


  goToTours() {
    this.router.navigateByUrl('/route-overview');
  }

}
