import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MilitaryBenefitsComponent } from './military-benefits/military-benefits.component';
import { MilitaryApplicationsComponent } from './military-applications/military-applications.component';
import { MilitaryControlComponent } from './military-control/military-control.component';



@NgModule({
  declarations: [
    MilitaryBenefitsComponent,
    MilitaryApplicationsComponent,
    MilitaryControlComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MilitaryModule { }
