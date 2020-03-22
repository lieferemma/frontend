import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)},
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'ordersummary',
    loadChildren: () => import('./ordersummary/ordersummary.module').then( m => m.OrdersummaryPageModule)
  },
  {
    path: 'trackorder',
    loadChildren: () => import('./trackorder/trackorder.module').then( m => m.TrackorderPageModule)
  },
  {
    path: 'successmodal',
    loadChildren: () => import('./successmodal/successmodal.module').then( m => m.SuccessmodalPageModule)
  },
  {
    path: 'driver-overview',
    loadChildren: () => import('./driver-overview/driver-overview.module').then( m => m.DriverOverviewPageModule)
  },
  {
    path: 'driver-overview',
    loadChildren: () => import('./driver-overview/driver-overview.module').then( m => m.DriverOverviewPageModule)
  },
  {
    path: 'route-overview',
    loadChildren: () => import('./route-overview/route-overview.module').then( m => m.RouteOverviewPageModule)
  },
  {
    path: 'driver-delivery',
    loadChildren: () => import('./driver-delivery/driver-delivery.module').then( m => m.DriverDeliveryPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'shopcode',
    loadChildren: () => import('./shopcode/shopcode.module').then( m => m.ShopcodePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
