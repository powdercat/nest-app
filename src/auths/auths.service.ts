import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthsService {
  constructor(private usersService: UsersService) {} // users 모듈에서 export 했고, auth 모듈에서 import 한 UsersService 를 사용할 수 있다.

  async login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;
    if (!password) {
      throw new BadRequestException('비밀번호를 입력해주세요.');
    }

    const users = await this.usersService.findOneByEmail(email);
    if (!users) {
      throw new BadRequestException('해당 이메일로 가입된 계정이 없습니다.');
    }

    if (users.password !== password) {
      throw new BadRequestException('비밀번호가 일치하지 않습니다.');
    }

    return '로그인 성공';
  }
}
