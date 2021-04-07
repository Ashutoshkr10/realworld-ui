import { BrowserModule } from "@angular/platform-browser";
import { ModuleWithProviders, NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { RouterModule } from "@angular/router";
import { HomeModule } from "./home/home.module";

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], {
  useHash: true,
});

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, rootRouting, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
