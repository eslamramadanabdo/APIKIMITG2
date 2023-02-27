import { HttpClient } from '@angular/common/http';
import { Department } from './../models/Department';
import { SharedserviceService } from 'src/app/services/sharedservice.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends SharedserviceService<Department> {

  constructor(  public http : HttpClient  ) {
    super( http , "http://localhost:3000/department" );
  }

}
