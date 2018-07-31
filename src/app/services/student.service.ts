import { Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { SemSection, UsnName } from '../interfaces';
import { throwError } from '../../../node_modules/rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CATCH_ERROR_VAR } from '../../../node_modules/@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  semsec :String;
  private _loginUrl = "http://127.0.0.1:5000/login";  
  constructor(private _httpClient: HttpClient) { }

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

  //user object contains username and password
  loginUser(user){
    return this._httpClient.post<any>(this._loginUrl,user)
  }

  //if the token exists in browser this returns true
  loggedIn(){
    return !!localStorage.getItem('access_token')
  }
  getToken(){
    return localStorage.getItem('access_token')
  }

  loggingout(){
    return this._httpClient.post<any>('http://127.0.0.1:5000/logout/access',0);
  }

  /*get the list of available semesters and sections */
  /* TODO: get this for the currently logged in users dept */
  getClasses(){
    return this._httpClient.get<SemSection[]>('http://127.0.0.1:5002/getClassList').pipe(
      retry(3),     //retry a failed request upto 3 times
      catchError(this.handleError) //then handle the error
    );
  }

  /*get the list of the names and usn of all the students of a particular class */
  /* Todo: add dept provision */
  getStudentList(sem : Number ,sec : String){
    const semsec: String = `${sem}${sec}`;
    return this._httpClient.get<UsnName[]>(`http://127.0.0.1:5002//api/v1.0/students?sem=${sem}&sec=${sec}`);//, semsec);
  }
}
