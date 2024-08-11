import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SatFinderComponent } from "./sat-finder/sat-finder.component";

import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [SatFinderComponent],
  imports: [CommonModule, RouterModule],
})
export class SatFinderModule {}
