import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/index/index.module').then( m => m.IndexPageModule)},
  {
    path: 'order',
    loadChildren: () => import('./pages/order/order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'ordersummary',
    loadChildren: () => import('./pages/order/ordersummary/ordersummary.module').then( m => m.OrdersummaryPageModule)
  },
  {
    path: 'trackorder',
    loadChildren: () => import('./pages/trackorder/trackorder.module').then( m => m.TrackorderPageModule)
  },
  {
    path: 'successmodal',
    loadChildren: () => import('./pages/successmodal/successmodal.module').then( m => m.SuccessmodalPageModule)
  },
  {
    path: 'driver-overview',
    loadChildren: () => import('./pages/driver-overview/driver-overview.module').then( m => m.DriverOverviewPageModule)
  },
  {
    path: 'driver-overview',
    loadChildren: () => import('./pages/driver-overview/driver-overview.module').then( m => m.DriverOverviewPageModule)
  },
  {
    path: 'route-overview',
    loadChildren: () => import('./pages/route-overview/route-overview.module').then( m => m.RouteOverviewPageModule)
  },
  {
    path: 'driver-delivery',
    loadChildren: () => import('./pages/driver-delivery/driver-delivery.module').then( m => m.DriverDeliveryPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'shopcode',
    loadChildren: () => import('./pages/shopcode/shopcode.module').then( m => m.ShopcodePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'myorders',
    loadChildren: () => import('./pages/order/myorders/myorders.module').then( m => m.MyordersPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
