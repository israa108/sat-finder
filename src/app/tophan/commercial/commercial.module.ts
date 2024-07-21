import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { KeyAspectsComponent } from './components/key-aspects/key-aspects.component';
import { ControlRoomsComponent } from './components/control-rooms/control-rooms.component';



@NgModule({
  declarations: [
    BenefitsComponent,
    ApplicationsComponent,
    KeyAspectsComponent,
    ControlRoomsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CommercialModule { }
