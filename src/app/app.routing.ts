import { ContactUsComponent } from "./ojo/contact-us/contact-us.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { ComponentsComponent } from "./components/components.component";
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

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: ComponentsComponent },
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
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [],
})
export class AppRoutingModule {}
