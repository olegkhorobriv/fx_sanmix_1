import {Injectable, UnauthorizedException} from '@nestjs/common';
import {PrismaService} from "@sanmix/api/app/common/prisma.service";
import {LoginModel} from "../../../../@libs/models/login.model";
import {RegisterModel} from "../../../../@libs/models/register.model";
import * as bcrypt from 'bcrypt';
import {JwtService} from "@nestjs/jwt";
import {RolesEnum} from "@sanmix/ui/@common/roles.enum";

@Injectable()
export class UserService {

  private readonly salt = 3;
  constructor(
      private prisma: PrismaService,
      private jwtService: JwtService
  ) {
  }

  public async login(data: LoginModel) {
    const user = await this.prisma.user.findFirst({
      where: {
        email: data.email
      }
    })
    if (user) {
      const isMatch = await bcrypt.compare(data.password, user.password);
      if (isMatch) {
        const payload = { sub: user.id, username: user.email };
        const access_token = await this.jwtService.signAsync(payload);

        // if (access_token) {
        //   const valid_to = new Date();
        //   valid_to.setMinutes(valid_to.getMinutes() + 15)
        //   await this.prisma.accessTokens.create({
        //     data: {
        //       token: access_token,
        //       user_id: user.id,
        //       valid_to
        //     }
        //   })
        // }

        return {
          access_token,
          role: user.role,
          id: user.id
        };
      }
      else {
        throw new UnauthorizedException();
      }
    }

    throw new UnauthorizedException();
  }

  public async register(data: RegisterModel) {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [
          {email: data.email},
          {username: data.username},
        ]
      }
    })

    if (user) return false;

    const hash = await bcrypt.hash(data.password, this.salt);

    const result = await this.prisma.user.create({
      data: {
        email: data.email,
        role: RolesEnum.CLIENT,
        password: hash,
        username: data.username,
        createdAt: new Date()
      }
    })

    if (result) {
      return true;
    }
  }
}
