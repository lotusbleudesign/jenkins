import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})

export class SingleFaceSnapComponent implements OnInit {

  faceSnapEnfant!: FaceSnap;
  btnText!: string;
  facesnapId!: number;
  snapped: boolean = false;

  constructor(private faceSnapService: FaceSnapService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    // récupérer l'id, + permet de retourner string 'id' en number
    this.facesnapId = +this.route.snapshot.params['id'];
    this.faceSnapEnfant = this.faceSnapService.getFaceSnapById(this.facesnapId);

    this.snapped = localStorage.getItem(`${this.facesnapId}`) ? true : false
    this.applySnap()
  }

  applySnap() {
    this.btnText = this.snapped ? "Oops snap!" : "Oh snap!"
    this.faceSnapService.snapeFaceById(this.faceSnapEnfant.id, !this.snapped)
  }

  onAddSnap() {
    // toggle snap
    this.snapped = !this.snapped

    // Change according snap
    this.applySnap()

    // Storage
    if (!this.snapped) {
      localStorage.removeItem(`${this.facesnapId}`);
    } else {
      localStorage.setItem(`${this.facesnapId}`, "SNAPPED")
    }
  }


}
