import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommercialComponent } from "./commercial/commercial.component";
import { MilitaryComponent } from "./military/military.component";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "app/app.routing";

@NgModule({
  declarations: [CommercialComponent, MilitaryComponent],
  imports: [CommonModule, RouterModule, AppRoutingModule],
})
export class TophanModule {}
