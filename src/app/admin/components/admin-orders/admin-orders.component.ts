import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'shared/models/order';
import { OrderService } from 'shared/services/order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit {
  orders$;

  constructor( private orderService: OrderService)
    {
      this.orders$ = orderService.getOrders().valueChanges(); 
     }

  ngOnInit(): void {
  }

}
