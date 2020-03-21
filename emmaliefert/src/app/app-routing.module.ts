import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
