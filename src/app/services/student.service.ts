import { HttpClient } from '@angular/common/http';
import { SharedserviceService } from 'src/app/services/sharedservice.service';
import { Injectable } from '@angular/core';
import { Studnet } from '../models/Studnet';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends SharedserviceService<Studnet> {



  constructor( public http : HttpClient ) {
    super( http ,"http://localhost:3000/student" );
  }
}
