import { Cource } from './../../models/Cource';
import { Component, OnInit } from '@angular/core';
import { CourceService } from 'src/app/services/cource.service';

@Component({
  selector: 'app-clist',
  templateUrl: './clist.component.html',
  styleUrls: ['./clist.component.css']
})
export class ClistComponent implements OnInit {


  cource : Cource = new  Cource();
  constructor( public serv : CourceService ) { 
    this.serv.get().subscribe( (data: Cource)=>{
      this.cource = data;
    }  );
  }

  ngOnInit(): void {
  }

  delete(id){
    this.serv.delete(id).subscribe( ( data: Cource )=>{
      window.location.reload();
    } );
  }




}
