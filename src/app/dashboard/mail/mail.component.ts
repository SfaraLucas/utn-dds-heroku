import { Component, OnInit } from '@angular/core';
import {MOCK_DASHBOARD} from '../dashboard-mock';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  messages = MOCK_DASHBOARD.mails;

  constructor() { }

  ngOnInit(): void {}

  hideContent(mail): void {
    mail.checked = true;
  }
}
