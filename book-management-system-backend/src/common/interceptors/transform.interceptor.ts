import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface Response<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp: string;
  path: string;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const request = context.switchToHttp().getRequest();
    
    return next.handle().pipe(
      map((data) => ({
        success: true,
        message: '请求成功',
        data,
        timestamp: new Date().toISOString(),
        path: request.url,
      })),
      catchError((error) => {
        // 返回统一的错误响应格式
        return throwError(() => {
          // 如果是 HttpException，使用其message
          if (error?.response?.message) {
            error.message = error.response.message;
          }
          
          // 添加额外的响应信息
          error.response = {
            success: false,
            message: error.message || '请求失败',
            data: null,
            timestamp: new Date().toISOString(),
            path: request.url,
          };
          
          return error;
        });
      }),
    );
  }
}