import { Router } from '@angular/router';
import { CourceService } from './../../services/cource.service';
import { Cource } from './../../models/Cource';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadd',
  templateUrl: './cadd.component.html',
  styleUrls: ['./cadd.component.css']
})
export class CaddComponent implements OnInit {

  cource : Cource = new Cource();

  constructor( public serv : CourceService  , public route : Router) { }

  ngOnInit(): void {
  }


  post(){
    this.serv.post( this.cource ).subscribe( (data:Cource)=>{
      this.route.navigateByUrl('/cource/list');
    } )
  }

}
