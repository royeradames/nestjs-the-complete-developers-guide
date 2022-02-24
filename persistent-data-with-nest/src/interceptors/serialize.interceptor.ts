import {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

// other any cannot be taking away because at the moment ts doesn't play too well with dto or incoming map data
/* make sure that the dto are a class */
interface ClassConstructor {
  new (...args: any[]): unknown;
}
export function Serialize(dto: ClassConstructor) {
  return UseInterceptors(new SerializeInterceptor(dto));
}
export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: ClassConstructor) {}
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    return handler.handle().pipe(
      map((data: any) => {
        return plainToClass(this.dto, data, {
          // makes it so only the @Expose entities are return to the user
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
