import { Studnet } from './../../models/Studnet';
import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from 'src/app/services/sharedservice.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {

  students : Studnet = new Studnet();

  constructor( public serv : StudentService ) { 

    this.serv.get().subscribe(  (data : Studnet)=>{
      this.students = data;
    }  ); 
  }


  delete(id : number){
    this.serv.delete(id).subscribe( (data :Studnet)=>{
      window.location.reload();
    } );
  }



}
