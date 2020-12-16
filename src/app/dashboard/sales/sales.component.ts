import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MOCK_DASHBOARD} from '../dashboard-mock';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SalesComponent implements OnInit {
  data = MOCK_DASHBOARD.buys;
  dataSource = this.data.filter(e => e.status === 'FINISHED');
  dataSource2 = this.data.filter(e => e.status === 'PENDING');

  columnsToDisplay = ['id', 'payment', 'date', 'amount'];
  expandedElement: any;

  paymentMethod: string;
  amount: number;

  constructor() { }

  ngOnInit(): void {}

  chargeBuy(): void {
    this.data.push({
      id: this.data.length + 1,
      payment: this.paymentMethod,
      date: new Date().toISOString().substr(0, 10),
      approvedBudget: '1',
      amount: this.amount,
      status: 'PENDING'
      },
    );
    this.dataSource2 = this.data.filter(e => e.status === 'PENDING');

  }
}
