import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./pages/main/main.component";

const routes: Routes = [
  {path: '', component: MainComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule {

}
