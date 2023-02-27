import { Doctor } from './../../models/Doctor';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from './../../services/doctor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dedit',
  templateUrl: './dedit.component.html',
  styleUrls: ['./dedit.component.css']
})
export class DeditComponent implements OnInit {
  id;

  doctor : Doctor = new Doctor();
  constructor( public serv : DoctorService , public active: ActivatedRoute , public router : Router ) { 
    this.id = this.active.snapshot.paramMap.get('id');

    this.serv.getById(this.id).subscribe( (data:Doctor)=>{
      this.doctor = data;
    } );
  }

  update(){
    this.serv.update( this.id , this.doctor).subscribe( (data:Doctor)=>{
      
      this.router.navigateByUrl('/doctor/list');
    } );
  }

  ngOnInit(): void {
  }

}
