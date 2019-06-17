import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  //EXEMPLES POUR UN PRODUIT
  getMembres(): Observable<any> {
    return this.http.get(endpoint + 'membres').pipe(
      map(this.extractData));
  }
  
  getMembre(id): Observable<any> {
    return this.http.get(endpoint + 'membre/' + id).pipe(
      map(this.extractData));
  }
  
  addMembre (membre): Observable<any> {
    console.log(membre);
    return this.http.post<any>(endpoint + 'membre', JSON.stringify(membre), httpOptions).pipe(
      tap((membre) => console.log(`added membre w/ id=${membre.id}`)),
      catchError(this.handleError<any>('addMembre'))
    );
  }  
  updateMembre (id, membre): Observable<any> {
    return this.http.put(endpoint + 'membre/' + id, JSON.stringify(membre), httpOptions).pipe(
      tap(_ => console.log(`updated membre id=${id}`)),
      catchError(this.handleError<any>('updateMembre'))
    );
  }
  
  /*deleteProduct (id): Observable<any> {
    return this.http.delete<any>(endpoint + 'products/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }*/
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
const endpoint = 'http://localhost:3000/api/v1/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
