import { Component } from '@angular/core';
import { PaymentDetailService } from './shared/payment-detail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'Angular9';
  constructor(public service: PaymentDetailService ) { }
}
