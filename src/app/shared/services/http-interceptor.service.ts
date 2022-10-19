import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserService } from "./user.service";

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private userService: UserService) { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let currentUser = this.userService.getSessionUser;
    if (currentUser) {
      let authdata = window.btoa(
        currentUser.loginUserId + ":" + currentUser.passwordHash
      );
      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${authdata}`,
        },
      });
      return next.handle(request);
    } else {
      return next.handle(request);
    }
  }
}
