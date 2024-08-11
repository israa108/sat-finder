import { ContactUsComponent } from "./ojo/contact-us/contact-us.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { BenefitsComponent } from "./ojo/benefits/benefits.component";
import { AboutUsComponent } from "./ojo/about-us/about-us.component";
import { CorpsComponent } from "./ojo/products/corps/corps.component";
import { AccidentComponent } from "./ojo/products/accident/accident.component";
import { FacilityManagementComponent } from "./ojo/products/facility-management/facility-management.component";
import { FieldStaffComponent } from "./ojo/products/field-staff/field-staff.component";
import { FleetManagementComponent } from "./ojo/products/fleet-management/fleet-management.component";
import { MdvrComponent } from "./ojo/products/mdvr/mdvr.component";
import { SmartComponent } from "./ojo/products/smart/smart.component";
import { WasteComponent } from "./ojo/products/waste/waste.component";
import { PerfectStoreComponent } from "./ojo/products/perfect-store/perfect-store.component";
import { PharmaceuticalsComponent } from "./ojo/industries/pharmaceuticals/pharmaceuticals.component";
import { PackageComponent } from "./ojo/industries/package/package.component";
import { MaintanenceComponent } from "./ojo/industries/maintanence/maintanence.component";
import { LogisticsComponent } from "./ojo/industries/logistics/logistics.component";
import { FastMpvingComponent } from "./ojo/industries/fast-mpving/fast-mpving.component";
import { InformationComponent } from "./ojo/industries/information/information.component";
import { SatFinderComponent } from "./sat-finder/sat-finder/sat-finder.component";
import { CommercialHomeComponent } from "./argo-x/commercial/commercial-home/commercial-home.component";
import { ApplicationsComponent } from "./argo-x/commercial/applications/applications.component";
import { ControlRoomsComponent } from "./argo-x/commercial/control-rooms/control-rooms.component";
import { KeyAspectsComponent } from "./argo-x/commercial/key-aspects/key-aspects.component";
import { CommercialBenefitsComponent } from "./argo-x/commercial/commercial-benefits/commercial-benefits.component";
import { MilitaryComponent } from "./argo-x/military/military.component";
import { MilitaryBenefitsComponent } from "./argo-x/military/military-benefits/military-benefits.component";
import { MilitaryApplicationsComponent } from "./argo-x/military/military-applications/military-applications.component";
import { MilitaryControlComponent } from "./argo-x/military/military-control/military-control.component";
import { ComponentsComponent } from "./ojo/components/components.component";

const routes: Routes = [
  { path: "", redirectTo: "sat-finder", pathMatch: "full" },
  { path: "home", component: ComponentsComponent },
  { path: "sat-finder", component: SatFinderComponent },
  { path: "ojo/about-us", component: AboutUsComponent },
  { path: "ojo/contact-us", component: ContactUsComponent },
  { path: "ojo/benefits", component: BenefitsComponent },
  { path: "ojo/products/corps", component: CorpsComponent },
  { path: "ojo/products/accident", component: AccidentComponent },

  // ojo product component
  {
    path: "ojo/products/facility-management",
    component: FacilityManagementComponent,
  },
  { path: "ojo/products/field-staff", component: FieldStaffComponent },
  {
    path: "ojo/products/fleet-mamangement",
    component: FleetManagementComponent,
  },
  { path: "ojo/products/mdvr", component: MdvrComponent },
  { path: "ojo/products/perfect-store", component: PerfectStoreComponent },
  { path: "ojo/products/smart", component: SmartComponent },
  { path: "ojo/products/waste", component: WasteComponent },

  // ojo industries component
  { path: "ojo/industries/information", component: InformationComponent },
  { path: "ojo/industries/fast-mpving", component: FastMpvingComponent },
  { path: "ojo/industries/logistics", component: LogisticsComponent },
  { path: "ojo/industries/maintanence", component: MaintanenceComponent },
  { path: "ojo/industries/package", component: PackageComponent },
  {
    path: "ojo/industries/pharmaceuticals",
    component: PharmaceuticalsComponent,
  },

  // AGRO-X
  // commercial
  {
    path: "argo-x/commercial/commercial-home",
    component: CommercialHomeComponent,
  },
  {
    path: "argo-x/commercial/commercial-benefits",
    component: CommercialBenefitsComponent,
  },
  {
    path: "argo-x/commercial/applications",
    component: ApplicationsComponent,
  },
  {
    path: "argo-x/commercial/control-rooms",
    component: ControlRoomsComponent,
  },
  {
    path: "argo-x/commercial/key-aspects",
    component: KeyAspectsComponent,
  },

  // AGRO-X
  // Military
  {
    path: "argo-x/military/military",
    component: MilitaryComponent,
  },
  {
    path: "argo-x/military/military-benefits",
    component: MilitaryBenefitsComponent,
  },
  {
    path: "argo-x/military/military-applications",
    component: MilitaryApplicationsComponent,
  },
  {
    path: "argo-x/military/military-control",
    component: MilitaryControlComponent,
  },
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [],
})
export class AppRoutingModule {}
