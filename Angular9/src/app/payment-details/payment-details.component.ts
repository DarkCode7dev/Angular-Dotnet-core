import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';
import {Routes, RouterModule} from '@angular/router';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: []
})
export class PaymentDetailsComponent implements OnInit {

  constructor(private service: PaymentDetailService ) { }

  ngOnInit(): void {
  }
}
