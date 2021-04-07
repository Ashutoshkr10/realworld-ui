import { ModuleWithProviders, NgModule } from "@angular/core";

import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "app/shared/shared.module";

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: "",
    component: HomeComponent,
  },
]);

@NgModule({
  imports: [homeRouting, SharedModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
