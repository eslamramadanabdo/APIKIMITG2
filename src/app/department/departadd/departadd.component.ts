import { Router } from '@angular/router';
import { DepartmentService } from './../../services/department.service';
import { Department } from './../../models/Department';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departadd',
  templateUrl: './departadd.component.html',
  styleUrls: ['./departadd.component.css']
})
export class DepartaddComponent implements OnInit {

  department  :Department = new Department();

  constructor( public serv : DepartmentService , public route : Router ) { }

  ngOnInit(): void {
  }

  post(){
    this.serv.post( this.department ).subscribe(  (data:Department)=>{
      this.route.navigateByUrl('/department/list');
    });
  }

}
