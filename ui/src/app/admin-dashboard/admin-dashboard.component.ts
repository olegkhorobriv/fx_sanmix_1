import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  providers: [DatePipe]
})
export class AdminDashboardComponent {



  getCurrentDate(): Date {
    return new Date();
  }


  stats = [
    { title: 'Всього продуктів', value: '1500' },
    { title: 'Всього замовлень', value: '320' },
    { title: 'Всього продуктів', value: '120' },
    { title: 'Всього користувачів', value: '1400' }
  ];
  orders = ['Order #1', 'Order #2', 'Order #3', 'Order #4', 'Order #5'];
  tasks = ['Task #1', 'Task #2', 'Task #3'];
}
