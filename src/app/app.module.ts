import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NavebarComponent } from './shared/navebar/navebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './student/add/add.component';
import { ListComponent } from './student/list/list.component';
import { EditComponent } from './student/edit/edit.component';
import { DeditComponent } from './doctor/dedit/dedit.component';
import { DlistComponent } from './doctor/dlist/dlist.component';
import { DaddComponent } from './doctor/dadd/dadd.component';
import { CaddComponent } from './cource/cadd/cadd.component';
import { ClistComponent } from './cource/clist/clist.component';
import { CeditComponent } from './cource/cedit/cedit.component';
import { DepartaddComponent } from './department/departadd/departadd.component';
import { DepartlistComponent } from './department/departlist/departlist.component';
import { DeparteditComponent } from './department/departedit/departedit.component'



@NgModule({
  declarations: [
    AppComponent,
    NavebarComponent,
    FooterComponent,
    HomeComponent,
    AddComponent,
    ListComponent,
    EditComponent,
    DeditComponent,
    DlistComponent,
    DaddComponent,
    CaddComponent,
    ClistComponent,
    CeditComponent,
    DepartaddComponent,
    DepartlistComponent,
    DeparteditComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
