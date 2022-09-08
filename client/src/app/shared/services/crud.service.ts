import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CompxItem } from '../interfaces/CompxItem';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  endpoint = 'https://localhost:3000/api';

  constructor(private httpClient: HttpClient) {}

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAllItems(): Observable<CompxItem> {
    return this.httpClient
      .get<CompxItem>(this.endpoint + '/items')
      .pipe(retry(1), catchError(this.processError));
  }

  // Handles throwing an error message
  processError(err: any) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(() => {
      message;
    });
  }

}
