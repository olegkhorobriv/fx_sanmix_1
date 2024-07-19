// // orders.component.ts
// import { Component, OnInit } from '@angular/core';


// interface Order {
//   id: number;
//   date: Date;
//   status: string;
//   city: string;
// }

// @Component({
//   selector: 'app-orders',
//   templateUrl: './orders.component.html',
//   styleUrls: ['./orders.component.css']
// })
// export class OrdersComponent implements OnInit {
//   orders: Order[] = [
//     { id: 1, date: new Date('2024-06-01'), status: 'Completed', city: 'Kyiv' },
//     { id: 2, date: new Date('2024-06-02'), status: 'Pending', city: 'Lviv' },
//     // Додати більше замовлень для прикладу
//   ];

//   statuses = ['Completed', 'Pending', 'Canceled'];

//   filters = {
//     date: null,
//     status: '',
//     city: ''
//   };

//   constructor() { }

//   ngOnInit(): void { }

//   applyDateFilter(date: any): void {
//     this.filters.date = date ? date.value : null;
//   }

//   applyStatusFilter(status: string): void {
//     this.filters.status = status;
//   }

//   applyCityFilter(city: string): void {
//     this.filters.city = city;
//   }

//   editOrder(order: Order): void {
//     // Логіка редагування замовлення
//     console.log('Edit order', order);
//   }

//   deleteOrder(order: Order): void {
//     // Логіка видалення замовлення
//     console.log('Delete order', order);
//   }
// }
// orders.component.ts
// orders.component.ts
import { Component, OnInit } from '@angular/core';

interface Order {
  id: number;
  date: string;
  status: string;
  city: string;
  // Інші поля замовлення
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [
    { id: 1, date: '2024-07-01', status: 'completed', city: 'Kyiv' },
    { id: 2, date: '2024-07-02', status: 'pending', city: 'Lviv' },
    // Додаткові замовлення
  ];

  filteredOrders: Order[] = [];
  filterDate: Date | null = null;
  filterStatus: string = '';
  filterCity: string = '';

  ngOnInit(): void {
    this.filteredOrders = this.orders;
  }

  applyFilters(): void {
    this.filteredOrders = this.orders.filter(order => {
      const matchesDate = this.filterDate ? order.date === this.filterDate.toISOString().split('T')[0] : true;
      const matchesStatus = this.filterStatus ? order.status === this.filterStatus : true;
      const matchesCity = this.filterCity ? order.city === this.filterCity : true;
      return matchesDate && matchesStatus && matchesCity;
    });
  }

  clearFilters(): void {
    this.filterDate = null;
    this.filterStatus = '';
    this.filterCity = '';
    this.filteredOrders = this.orders;
  }
}


