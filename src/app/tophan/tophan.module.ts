import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommercialComponent } from "./commercial/commercial.component";
import { MilitaryComponent } from "./military/military.component";
import { TophanRoutingModule } from "./tophan-routing.module";

@NgModule({
  declarations: [CommercialComponent, MilitaryComponent],
  imports: [CommonModule, TophanRoutingModule],
})
export class TophanModule {}
