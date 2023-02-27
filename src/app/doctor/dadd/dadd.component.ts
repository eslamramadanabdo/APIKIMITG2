import { Router } from '@angular/router';
import { DoctorService } from './../../services/doctor.service';
import { Doctor } from './../../models/Doctor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dadd',
  templateUrl: './dadd.component.html',
  styleUrls: ['./dadd.component.css']
})
export class DaddComponent  {
  doctor : Doctor  = new Doctor();
  constructor( public serv : DoctorService  , public router : Router) { }
  
  
  post(){
    this.serv.post(this.doctor).subscribe((data:Doctor)=>{
      this.router.navigateByUrl('/doctor/list');
    });
  }


}
