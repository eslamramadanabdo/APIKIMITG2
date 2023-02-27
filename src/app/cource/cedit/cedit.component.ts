import { Cource } from './../../models/Cource';
import { CourceService } from './../../services/cource.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cedit',
  templateUrl: './cedit.component.html',
  styleUrls: ['./cedit.component.css']
})
export class CeditComponent implements OnInit {

  id  ;

  cource : Cource = new Cource();
  constructor(  public route : Router ,  public active : ActivatedRoute , public serv : CourceService ) {
    this.id = this.active.snapshot.paramMap.get('id');
    this.serv.getById(this.id).subscribe( ( data : Cource )=>{
      this.cource = data;
    } );

  }

  ngOnInit(): void {
  }


  update(){
    this.serv.update( this.id , this.cource ).subscribe(( data:Cource )=>{
      this.route.navigateByUrl('/cource/list');
    });
  }

}
