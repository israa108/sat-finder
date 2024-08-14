import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "app/app.routing";
import { CommercialModule } from "./commercial/commercial.module";
import { MilitaryModule } from "./military/military.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    CommercialModule,
    MilitaryModule,
  ],
})
export class TophanModule {}
