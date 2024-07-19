// categories.component.ts
import { Component } from '@angular/core';

interface Category {
  name: string;
  description: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories: Category[] = [
    {
      name: 'Electronics',
      description: 'Devices and gadgets'
    },
    {
      name: 'Books',
      description: 'Fiction and non-fiction books'
    }
    // Додайте більше категорій за потреби
  ];

  applyFilter(filterValue: string) {
    // Логіка фільтрації категорій
    filterValue = filterValue.trim().toLowerCase();
    this.categories = this.categories.filter(category => category.name.toLowerCase().includes(filterValue));
  }

  addCategory() {
    // Логіка додавання нової категорії
  }

  editCategory(category: Category) {
    // Логіка редагування категорії
  }

  deleteCategory(category: Category) {
    // Логіка видалення категорії
  }
}
