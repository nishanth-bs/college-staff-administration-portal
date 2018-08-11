import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TakeAttendanceService {

  private _studentsUrl = "http://127.0.0.1:3000/students";
  private _classesUrl = "http://127.0.0.1:3000/classes";

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

  getStudentList(id:number){
    return this._httpClient.get<any>(this._studentsUrl);
  }

  getTeacherClassList(){
    return this._httpClient.get<any>(this._classesUrl);
  }
}
