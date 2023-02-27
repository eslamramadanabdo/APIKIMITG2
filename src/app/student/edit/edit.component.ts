import { SharedserviceService } from './../../services/sharedservice.service';
import { Studnet } from './../../models/Studnet';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent  {

  student: Studnet = new Studnet();
  id ;

  constructor( public active: ActivatedRoute , public serv : StudentService ) {
  this.id =   this.active.snapshot.paramMap.get('id');
    this.serv.getById(this.id).subscribe( (data :Studnet )=>{
      this.student = data;
    } );
  }


  update(){
    this.serv.update( this.id , this.student ).subscribe(  (data:Studnet)=>{
      window.location.reload();
    });
  }

}
