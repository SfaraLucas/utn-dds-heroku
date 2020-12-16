import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-multi-card',
  templateUrl: './multi-card.component.html',
  styleUrls: ['./multi-card.component.scss']
})
export class MultiCardComponent implements OnInit {

  @Input() firstRow?: string;
  @Input() secondRow?: string;
  @Input() thirdRow?: string;

  constructor() { }

  ngOnInit(): void {}

}
