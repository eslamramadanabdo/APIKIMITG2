import { DepartmentService } from './../../services/department.service';
import { Department } from './../../models/Department';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departlist',
  templateUrl: './departlist.component.html',
  styleUrls: ['./departlist.component.css']
})
export class DepartlistComponent implements OnInit {


  depratment : Department = new  Department();

  constructor( public serv : DepartmentService ) {
    this.serv.get().subscribe((data:Department)=>{
      this.depratment = data;
    });
  }

  ngOnInit(): void {
  }

  delete(id){
    this.serv.delete(id).subscribe( (data: Department)=>{
      window.location.reload();
    } );
  }

}
