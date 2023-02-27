import { HttpClient } from '@angular/common/http';
import { SharedserviceService } from 'src/app/services/sharedservice.service';
import { Injectable } from '@angular/core';
import { Doctor } from '../models/Doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService extends SharedserviceService<Doctor> {

  constructor(  public http : HttpClient ) {
    super(http , "http://localhost:3000/doctor");
  }
}
