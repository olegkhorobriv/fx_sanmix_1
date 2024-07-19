import { Component } from '@angular/core';

interface User {
  name: string;
  role: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: User[] = [
    {
      name: 'John Doe',
      role: 'Admin',
      email: 'john.doe@example.com',
      phone: '123-456-7890'
    },
    {
      name: 'Jane Smith',
      role: 'User',
      email: 'jane.smith@example.com',
      phone: '987-654-3210'
    }
    // Додайте більше користувачів за потреби
  ];

  applyFilter(filterValue: string) {
    // Логіка фільтрації користувачів
    filterValue = filterValue.trim().toLowerCase();
    this.users = this.users.filter(user => user.name.toLowerCase().includes(filterValue));
  }

  addUser() {
    // Логіка додавання нового користувача
  }

  editUser(user: User) {
    // Логіка редагування користувача
  }

  deleteUser(user: User) {
    // Логіка видалення користувача
  }
}
