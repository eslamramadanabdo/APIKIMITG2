import { DoctorService } from './../../services/doctor.service';
import { Doctor } from './../../models/Doctor';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dlist',
  templateUrl: './dlist.component.html',
  styleUrls: ['./dlist.component.css']
})
export class DlistComponent {


  doctor : Doctor = new Doctor();
  constructor( public serv : DoctorService  , public router : Router ) {

    this.serv.get().subscribe( (data : Doctor)=>{
      this.doctor =data;
    } );
  }


   delete(id){
    this.serv.delete(id).subscribe((data:Doctor)=>{
      window.location.reload();
    });
   }

   

}
