import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Membre } from '../model/membre';
import { Observable, observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
//import { Observable } from 'rxjs/Observable';

const endpoint = 'http://localhost:8080/api/vamarcher/1.0/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {
  results: any[];
  constructor(private http: HttpClient) { }
  
  private extractData(res: Response) {
    let body = res;
    console.log(res);
    return body || { };
  } 
  
  getMembres():Observable<any> {
    return this.http.get(endpoint + 'membres')
    .pipe();
  }
  
  getTeamLeaders():Observable<any>{
    return this.http.get(endpoint + 'teamleaders').pipe();
  }
  
  promote(id):Observable<any>{
    var userID = {"userID" : id};
    return this.http.post(endpoint + 'membre/promote', JSON.stringify(userID), httpOptions).pipe();
  }
  
  
  getMembre(id): Observable<any> {
    return this.http.get(endpoint + 'membre/' + id).pipe(map(this.extractData));
  }
  
  addMembre(membre:Membre) : Observable<any> {
    return this.http.post<any>(endpoint + 'membre/add', JSON.stringify(membre), httpOptions).pipe(
      tap((membre)=> console.log('ajout de membre id : ' + membre.id))
      );
    }
  }
  