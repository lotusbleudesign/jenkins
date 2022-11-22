import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap-header',
  templateUrl: './face-snap-header.component.html',
  styleUrls: ['./face-snap-header.component.scss']
})
export class FaceSnapHeaderComponent implements OnInit {

  title = "SnapFace"

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onAddNewFaceSnap(): void {
    this.router.navigateByUrl('create')
  }
}
