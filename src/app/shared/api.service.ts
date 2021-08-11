import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  endpoint: string = 'http://localhost:7000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Add student
  AddStudent(data): Observable<any> {
    let API_URL = `${this.endpoint}`;
    return this.http.post(API_URL, data)
  }

  // Get all students
  GetStudents() {
    return this.http.get(`${this.endpoint}`);
  }

  // Get all students 2. sposób

  private _refreshGetAllStudents$ = new Subject();

  get getAllStudents(){
    return this._refreshGetAllStudents$;
  }

  _refreshGetAllStudents(){
    return this.http.get(`${this.endpoint}`)
  }


  private user = new Subject<string>();

  castUser = this.user.asObservable();

  getHim(zmienna:string){
    this.user.next(zmienna)
  }
}
