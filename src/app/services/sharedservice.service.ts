import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Studnet } from '../models/Studnet';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService <T> {

//  typed design pattern 
  constructor( public http : HttpClient  , @Inject(String) public  url : string ) { }

  get() : Observable<T>{
    return this.http.get<T>( this.url );
  }

  post(body :T): Observable<T>{
    return this.http.post<T>(this.url , body);
  }

  delete(id : number): Observable<T>{
    return this.http.delete<T>(this.url + `/${id}`  );
  }

  getById(id): Observable<T>{
    return this.http.get<T>( this.url+ `/${id}` );
  }

  update( id , body :T ) : Observable<T>{
    return this.http.put<T>( this.url+ `/${id}` , body );
  }
}
