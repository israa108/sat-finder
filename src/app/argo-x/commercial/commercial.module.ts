import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CommercialBenefitsComponent } from "./commercial-benefits/commercial-benefits.component";
import { ApplicationsComponent } from "./applications/applications.component";
import { ControlRoomsComponent } from "./control-rooms/control-rooms.component";
import { KeyAspectsComponent } from "./key-aspects/key-aspects.component";
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "app/app.routing";

@NgModule({
  declarations: [
    ApplicationsComponent,
    CommercialBenefitsComponent,
    ControlRoomsComponent,
    KeyAspectsComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule, AppRoutingModule],
})
export class CommercialModule {}
