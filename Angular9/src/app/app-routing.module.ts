import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { PaymentDetailComponent } from './payment-details/payment-detail/payment-detail.component';
import { PaymentDetailListComponent } from './payment-details/payment-detail-list/payment-detail-list.component';

const routes: Routes = [

  {path: 'payment-detail' , component: PaymentDetailComponent},
  {path: 'payment-detail-list' , component: PaymentDetailListComponent}
  

];

@NgModule({
  declarations: [],
  imports: [ 
    RouterModule.forRoot(routes),
    CommonModule,
    RouterModule
  ]
})
export class AppRoutingModule { }
