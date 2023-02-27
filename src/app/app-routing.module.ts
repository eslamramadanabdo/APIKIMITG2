import { DeparteditComponent } from './department/departedit/departedit.component';
import { DepartlistComponent } from './department/departlist/departlist.component';
import { CeditComponent } from './cource/cedit/cedit.component';
import { CaddComponent } from './cource/cadd/cadd.component';
import { ClistComponent } from './cource/clist/clist.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './student/list/list.component';
import { AddComponent } from './student/add/add.component';
import { EditComponent } from './student/edit/edit.component';
import { DlistComponent } from './doctor/dlist/dlist.component';
import { DaddComponent } from './doctor/dadd/dadd.component';
import { DeditComponent } from './doctor/dedit/dedit.component';
import { DepartaddComponent } from './department/departadd/departadd.component';


const routes: Routes = [
  {path: '' , component : HomeComponent},
  {path: 'home' , component : HomeComponent},

  {path:  'student/list' ,component: ListComponent },
  {path: 'studnet/add' , component : AddComponent},
  {path: 'studnet/edit/:id' , component: EditComponent},


  {path : 'doctor/list' , component: DlistComponent },
  {path: 'doctor/add' , component: DaddComponent},
  {path: 'doctor/edit/:id' , component : DeditComponent},

  {path: 'cource/list' , component: ClistComponent},
  {path : 'cource/add' , component: CaddComponent},
  {path : 'cource/edit/:id' , component : CeditComponent},

  {path : 'department/list' , component : DepartlistComponent},
  {path : 'department/add' , component : DepartaddComponent},
  {path : 'department/edit/:id' , component: DeparteditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
