import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { LayoutComponent } from "./layout/layout.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,

  ],
  declarations: [
    HeaderComponent,
    LayoutComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
