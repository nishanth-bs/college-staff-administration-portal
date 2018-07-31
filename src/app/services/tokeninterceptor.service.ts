import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { StudentService } from '../services/student.service'
@Injectable({
  providedIn: 'root'
})

export class TokenInterceptorService implements HttpInterceptor{
  constructor(private _injector: Injector){}

  intercept(req, next){
    let authService = this._injector.get(StudentService)
    let tokenizedRequest = req.clone({
      setHeaders:{
        Authorization : `Bearer ${authService.getToken()}`//'Bearer xx.yy.zz'
      }
    })
    return next.handle(tokenizedRequest)
  }
}