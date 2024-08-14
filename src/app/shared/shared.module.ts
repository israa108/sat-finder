import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterArgoXComponent } from './footer-argo-x/footer-argo-x.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    FooterArgoXComponent
  ],
  imports: [CommonModule],
})
export class SharedModule {}
