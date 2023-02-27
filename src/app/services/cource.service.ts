import { HttpClient } from '@angular/common/http';
import { Cource } from './../models/Cource';
import { SharedserviceService } from './sharedservice.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourceService extends SharedserviceService <Cource> {

  constructor( public http : HttpClient ) {
    super( http , "http://localhost:3000/cource" );
  }
}
