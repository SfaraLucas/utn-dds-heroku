import { Component, OnInit } from '@angular/core';
import {MOCK_DASHBOARD} from '../dashboard-mock';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-buys',
  templateUrl: './buys.component.html',
  styleUrls: ['./buys.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class BuysComponent implements OnInit {
  theBuys = MOCK_DASHBOARD.buys;
  dataSource3 = MOCK_DASHBOARD.sales;

  columnsToDisplay = ['description', 'date', 'amount'];
  expandedElement: any;

  constructor() { }

  ngOnInit(): void {
  }

}
