import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CommercialBenefitsComponent } from "./commercial-benefits/commercial-benefits.component";
import { ApplicationsComponent } from "./applications/applications.component";
import { ControlRoomsComponent } from "./control-rooms/control-rooms.component";
import { KeyAspectsComponent } from "./key-aspects/key-aspects.component";
import { AppRoutingModule } from "app/app.routing";
import { NavCommercialComponent } from "app/shared/nav-commercial/nav-commercial.component";

@NgModule({
  declarations: [
    ApplicationsComponent,
    CommercialBenefitsComponent,
    ControlRoomsComponent,
    KeyAspectsComponent,
    NavCommercialComponent,
  ],
  imports: [CommonModule, RouterModule, AppRoutingModule],
})
export class CommercialModule {}
