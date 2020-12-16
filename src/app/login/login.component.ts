import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  password: string;
  user: string;
  error: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.error = false;
  }

  navigate(): void{
    if (this.user === 'lucassfara' && this.password === 'mauri123') {
      this.router.navigate(['menu']);
    } else {
      this.error = true;
    }
  }
}
