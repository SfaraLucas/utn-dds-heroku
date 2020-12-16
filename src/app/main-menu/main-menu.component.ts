import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  cardsArray: any;
  mockArray = [{
    title: 'Super Sociedad',
    content: 'Mengano Perez',
    color: 'red'}, {
    title: 'Nombre',
    content: 'Sociedad2',
    color: 'green'}, {
    title: 'Nombre',
    content: 'Sociedad3',
    color: 'blue'},
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.cardsArray = this.mockArray
    if (!this.cardsArray) {
      this.cardsArray = null;
    }
  }

  rowsToClass(card: any): string {
    return card.footer ? 'three-rows' : 'two-rows';
  }

  colorToClass(card: any): string {
    return `card-${card.color}`;
  }

  goToSoc(): void {
    this.router.navigate(['supsoc']);
  }

}
