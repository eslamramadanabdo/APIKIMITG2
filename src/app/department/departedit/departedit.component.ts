import { Department } from './../../models/Department';
import { DepartmentService } from './../../services/department.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departedit',
  templateUrl: './departedit.component.html',
  styleUrls: ['./departedit.component.css']
})
export class DeparteditComponent implements OnInit {

  id ;
  depart  : Department = new Department();
  constructor( public route : Router , public active : ActivatedRoute , public serv : DepartmentService ) { 
    this.id =   this.active.snapshot.paramMap.get('id');

    this.serv.getById(this.id).subscribe( (data:Department)=>{
      this.depart = data;
    } );


  }

  ngOnInit(): void {
  }
  
  update(){
    this.serv.update(this.id , this.depart).subscribe( (data:Department)=>{
      this.route.navigateByUrl('/department/list');
    } );
  }
}
