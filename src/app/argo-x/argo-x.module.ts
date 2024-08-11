import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommercialComponent } from "./commercial/commercial.component";
import { MilitaryComponent } from "./military/military.component";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "app/app.routing";
import { NavCommercialComponent } from "app/shared/nav-commercial/nav-commercial.component";

@NgModule({
  declarations: [
    CommercialComponent,
    MilitaryComponent,
    NavCommercialComponent,
  ],
  imports: [CommonModule, RouterModule, AppRoutingModule],
})
export class TophanModule {}
