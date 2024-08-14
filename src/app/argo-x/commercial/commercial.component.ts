import { Component, OnInit, ViewChild } from "@angular/core";
import { BrandsComponent } from "app/shared/brands/brands.component";

@Component({
  selector: "app-commercial",
  templateUrl: "./commercial.component.html",
  styleUrls: ["./commercial.component.css"],
})
export class CommercialComponent implements OnInit {
  constructor() {}
  @ViewChild(BrandsComponent) brands: BrandsComponent;

  ngOnInit(): void {}
}
