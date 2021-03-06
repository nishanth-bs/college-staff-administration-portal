import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  private _teacherUrl = "http://127.0.0.1:5000/api/v1.0/protected/teacher"
  constructor(private _httpClient : HttpClient) { }

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      // a client-side or network error occurred.
      console.error('An error occurred:', error.error.message);
    }else{
      //Backend returned an unsuccessful response code.
      //the response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, body was ${error.error}`)
    }
    //return an observable with a user-facing error message
    return throwError('Something bad happened, please try again later');
  };

  getTeachers(){
    return this._httpClient.get<Teacher[]>(this._teacherUrl).pipe(
      retry(3),     //retry a failed request upto 3 times
      catchError(this.handleError) //then handle the error
    );
  }
  
}
export interface Teacher{
  fullname:string,
  username:string
}


