import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FaceSnapLandingComponent } from "./face-snap-landing/face-snap-landing.component";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { NewFaceSnapComponent } from "./new-face-snap/new-face-snap.component";
import { SingleFaceSnapComponent } from "./single-face-snap/single-face-snap.component";

const routes: Routes = [
  { path: '', component: FaceSnapLandingComponent },
  { path: 'facesnaps', component: FaceSnapListComponent },
  { path: 'create', component: NewFaceSnapComponent },
  { path: 'facesnaps/:id', component: SingleFaceSnapComponent },
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }