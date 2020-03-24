import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-overview',
  templateUrl: './route-overview.page.html',
  styleUrls: ['./route-overview.page.scss'],
})
export class RouteOverviewPage implements OnInit {

  constructor(public router: Router) { }

  routes = [
    {
      title: "Der frühe Vogel fängt den Wurm",
      label:"Frühe Tour durch Stuttgart",
      start_time: "05:00 Uhr",
      drop_off_points: 2
    },
    {
      title: "Mittagspausenrunde",
      label:"Hedelfingen - Wangen",
      start_time: "12:00 Uhr",
      drop_off_points: 3
    },
    {
      title: "Abendliche Tour",
      label:"Dinner for one/or two",
      start_time: "18:00 Uhr",
      drop_off_points: 13
    }
  ]

  ngOnInit() {
    
  }

  startTour() {
    this.router.navigateByUrl('/driver-overview');
  }

  fast_delay(index)  {
    return (500+Number(index) * 500);
  }

}
