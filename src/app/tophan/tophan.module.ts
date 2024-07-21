import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommercialComponent } from './commercial/commercial.component';
import { MilitaryComponent } from './military/military.component';



@NgModule({
  declarations: [
    CommercialComponent,
    MilitaryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TophanModule { }
