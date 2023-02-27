import { StudentService } from './../../services/student.service';
import { Component, OnInit } from '@angular/core';
import { Studnet } from 'src/app/models/Studnet';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  {

    studnet : Studnet = new Studnet();
  constructor( public serv : StudentService ) { }


  post(){
    this.serv.post( this.studnet  ).subscribe(  (data : Studnet)=>{
      window.location.reload();
    });
  }
  

}
