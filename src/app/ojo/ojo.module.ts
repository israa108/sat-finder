import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NouisliderModule } from "ng2-nouislider";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { AgmCoreModule } from "@agm/core";
import { RouterModule } from "@angular/router";

import { BenefitsComponent } from "./benefits/benefits.component";
import { FieldStaffComponent } from "./products/field-staff/field-staff.component";
import { FleetManagementComponent } from "./products/fleet-management/fleet-management.component";
import { MdvrComponent } from "./products/mdvr/mdvr.component";
import { FacilityManagementComponent } from "./products/facility-management/facility-management.component";
import { PerfectStoreComponent } from "./products/perfect-store/perfect-store.component";
import { AccidentComponent } from "./products/accident/accident.component";
import { CorpsComponent } from "./products/corps/corps.component";
import { SmartComponent } from "./products/smart/smart.component";
import { WasteComponent } from "./products/waste/waste.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { NzButtonModule } from "ng-zorro-antd/button";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { NzInputModule } from "ng-zorro-antd/input";
import { InformationComponent } from "./industries/information/information.component";
import { LogisticsComponent } from "./industries/logistics/logistics.component";
import { MaintanenceComponent } from "./industries/maintanence/maintanence.component";
import { PackageComponent } from "./industries/package/package.component";
import { FastMpvingComponent } from "./industries/fast-mpving/fast-mpving.component";
import { PharmaceuticalsComponent } from "./industries/pharmaceuticals/pharmaceuticals.component";
import { NavbarComponent } from "app/shared/navbar/navbar.component";
import { BrandsComponent } from "app/shared/brands/brands.component";
import { UsersComponent } from "app/shared/users/users.component";
import { FooterComponent } from "app/shared/footer/footer.component";
import { ComponentsComponent } from "./components/components.component";
import { AppRoutingModule } from "app/app.routing";

@NgModule({
  declarations: [
    BenefitsComponent,
    FieldStaffComponent,
    FleetManagementComponent,
    MdvrComponent,
    FacilityManagementComponent,
    PerfectStoreComponent,
    AccidentComponent,
    CorpsComponent,
    SmartComponent,
    WasteComponent,
    AboutUsComponent,
    ContactUsComponent,
    InformationComponent,
    LogisticsComponent,
    MaintanenceComponent,
    PackageComponent,
    FastMpvingComponent,
    PharmaceuticalsComponent,
    NavbarComponent,
    BrandsComponent,
    UsersComponent,
    FooterComponent,
    ComponentsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module,
    AgmCoreModule.forRoot({
      apiKey: "",
    }),
    NzTabsModule,
    NzButtonModule,
    NzInputModule,
    RouterModule,
  ],
})
export class OjoModule {}
