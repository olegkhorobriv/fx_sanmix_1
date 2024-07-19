import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '@sanmix/ui/users/users.component';
import { UsersComponent } from './ui/src/app/users/users.component';

@NgModule({
  declarations: [UsersComponent, UsersComponent],
  imports: [CommonModule],
})
export class UsersModule {}
