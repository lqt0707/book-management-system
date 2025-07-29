import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { DbService } from 'src/db/db.service';
import { User } from './entities/user.entity';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UserService {
  @Inject(DbService)
  dbservice: DbService;

  async register(registerUserDto: RegisterUserDto) {
    try {
      // 验证输入参数
      if (!registerUserDto.username || !registerUserDto.password) {
        throw new BadRequestException('用户名和密码不能为空');
      }

      // 检查用户名长度
      if (registerUserDto.username.length < 3) {
        throw new BadRequestException('用户名长度不能少于3个字符');
      }

      // 检查密码长度
      if (registerUserDto.password.length < 6) {
        throw new BadRequestException('密码长度不能少于6个字符');
      }

      const users: User[] = await this.dbservice.read();
      const foundUser = users.find(
        (user) => user.username === registerUserDto.username,
      );

      if (foundUser) {
        throw new BadRequestException(
          `用户名 "${registerUserDto.username}" 已被注册`,
        );
      }

      const user = new User();
      user.username = registerUserDto.username;
      user.password = registerUserDto.password;
      users.push(user);
      await this.dbservice.write(users);

      return '注册成功';
    } catch (error) {
      // 如果是已知的业务异常，直接抛出
      if (error instanceof BadRequestException) {
        throw error;
      }

      // 如果是未知错误，记录日志并抛出通用错误
      console.error('注册过程中发生未知错误:', error);
      throw new BadRequestException('注册失败，请稍后重试');
    }
  }

  async login(loginUserDto: LoginUserDto) {
    try {
      const users: User[] = await this.dbservice.read();
      const foundUser = users.find(
        (user) => user.username === loginUserDto.username,
      );

      if (!foundUser) {
        throw new BadRequestException('用户名或密码错误');
      }

      if (foundUser.password !== loginUserDto.password) {
        throw new BadRequestException('用户名或密码错误');
      }

      return '登录成功';
    } catch (error) {
      // 如果是已知的业务异常，直接抛出
      if (error instanceof BadRequestException) {
        throw error;
      }

      // 如果是未知错误，记录日志并抛出通用错误
      console.error('登录过程中发生未知错误:', error);
      throw new BadRequestException('登录失败，请稍后重试');
    }
  }
}
