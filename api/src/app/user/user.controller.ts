import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '@sanmix/api/app/user/user.service';
import { LoginModel } from '../../../../@libs/models/login.model';
import { RegisterModel } from '../../../../@libs/models/register.model';

@Controller('user')
export class UserController {

  constructor(
      private userService: UserService
  ) {
  }

  @Post('login')
  public async login(
      @Body('data') data: LoginModel
  ) {
    return await this.userService.login(data);
  }

  @Post('register')
  public async register(
      @Body('data') data: RegisterModel
  ) {
    return await this.userService.register(data);
  }
}
