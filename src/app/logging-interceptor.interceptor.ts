import {HttpRequest, HttpEvent, HttpHandlerFn, HttpEventType} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  console.log('Request:', req.url);

  return next(req).pipe(
    tap(event => {
      if (event.type === HttpEventType.Response) {
        console.log('Response:', event);
      }
    })
  );
}
