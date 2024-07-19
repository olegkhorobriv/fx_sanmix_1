// import {Component, OnInit} from '@angular/core';
// import {RolesEnum} from "@sanmix/ui/@common/roles.enum";

// @Component({
//   selector: 'app-layout',
//   templateUrl: './layout.component.html',
//   styleUrls: ['./layout.component.scss'],
// })
// export class LayoutComponent implements OnInit {
//   year = new Date().getFullYear();
//   isAdmin = localStorage.getItem('role') === RolesEnum.ADMIN

//   menu: {title: string, url: string}[] = [
//     {title: 'Головна', url: 'home'},
//   ]

//   ngOnInit() {
//     if (this.isAdmin) {
//       this.menu.push({title: 'Категорії', url: 'categories'})
//     }
//   }
// }
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [DatePipe]
})
export class LayoutComponent {
  // Навігаційні елементи з відповідними посиланнями
  navItems = [
    { label: 'Головна', link: '/dashboard' },
    { label: 'Користувачі', link: '/users' },
    { label: 'Продукти', link: '/products' },
    { label: 'Категорії', link: '/categories' },
    { label: 'Замовлення', link: '/orders' },
    { label: 'Звіти', link: '/reports' },
    { label: 'Налаштування', link: '/settings' },
    { label: 'Завантажити', link: '/download' }
  ];

  getCurrentDate(): Date {
    return new Date();
  }
}
