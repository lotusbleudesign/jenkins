import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnapEnfant!: FaceSnap;
  btnText!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.btnText = "Oh snap!"
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnapEnfant.id}`)
  }

}
