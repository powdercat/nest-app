import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthsController } from './auths.controller';
import { AuthsService } from './auths.service';

@Module({
  imports: [UsersModule], // 다른 모듈을 import 한다.
  controllers: [AuthsController],
  providers: [AuthsService],
})
export class AuthsModule {}
