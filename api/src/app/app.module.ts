import { FilesService } from './files/files.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from "@nestjs/config";
import { PrismaModule } from "@sanmix/api/app/common/prisma.module";
import { JwtModule } from "@nestjs/jwt";
import { jwtSecret } from "@sanmix/api/app/common/jwt";
import { FilesModule } from './files/files.module';
import { FilesController } from './files/files.controller';




@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot(),
    PrismaModule,
    FilesModule,
    JwtModule.register({
      global: true,
      secret: jwtSecret,
      signOptions: { expiresIn: '1000s' },
    }),

  ],
  controllers: [AppController, FilesController],
  providers: [
    FilesService, AppService],
})
export class AppModule {
}
