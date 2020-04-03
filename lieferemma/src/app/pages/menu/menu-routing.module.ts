import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
  path: '',
  component: MenuPage,
  children : [
    {
       path: 'home',
       loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
     },
     {
      path: 'myorders',
      loadChildren: () => import('../order/myorders/myorders.module').then( m => m.MyordersPageModule)
    },
    {
      path: 'impressum',
      loadChildren: () => import('../impressum/impressum.module').then( m => m.ImpressumPageModule)
    },
    {
      path: 'dsgvo',
      loadChildren: () => import('../dsgvo/dsgvo.module').then( m => m.DsgvoPageModule)
    }
    // {
    //   path: 'order',
    //   loadChildren: () => import('../order/order/order.module').then( m => m.OrderPageModule)
    // },
    // {
    //   path: 'ordersummary',
    //   loadChildren: () => import('../order/ordersummary/ordersummary.module').then( m => m.OrdersummaryPageModule)
    // },
    // {
    //   path: 'trackorder',
    //   loadChildren: () => import('../trackorder/trackorder.module').then( m => m.TrackorderPageModule)
    // },
    // {
    //   path: 'successmodal',
    //   loadChildren: () => import('../successmodal/successmodal.module').then( m => m.SuccessmodalPageModule)
    // },
    // {
    //   path: 'driver-overview',
    //   loadChildren: () => import('../driver-overview/driver-overview.module').then( m => m.DriverOverviewPageModule)
    // },
    // {
    //   path: 'driver-overview',
    //   loadChildren: () => import('../driver-overview/driver-overview.module').then( m => m.DriverOverviewPageModule)
    // },
    // {
    //   path: 'route-overview',
    //   loadChildren: () => import('../route-overview/route-overview.module').then( m => m.RouteOverviewPageModule)
    // },
    // {
    //   path: 'driver-delivery',
    //   loadChildren: () => import('../driver-delivery/driver-delivery.module').then( m => m.DriverDeliveryPageModule)
    // },
    // {
    //   path: 'shopcode',
    //   loadChildren: () => import('../shopcode/shopcode.module').then( m => m.ShopcodePageModule)
    // },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
