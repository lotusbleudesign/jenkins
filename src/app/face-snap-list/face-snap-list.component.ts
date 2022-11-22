import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';
import { interval, map, Observable, Subject, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {

  // myfaceSnapParent!: FaceSnap[];
  myfaceSnapParent$!: Observable<FaceSnap[]>

  private destroy$!: Subject<boolean>;

  constructor(private faceSnapService: FaceSnapService) { }

  ngOnInit(): void {
    //this.destroy$ = new Subject();
    this.myfaceSnapParent$ = this.faceSnapService.getAllFaceSnaps()

    // interval(1000).pipe(
    //   // take(2),
    //   // takeUntil(this.destroy$),
    //   tap(console.log)
    // ).subscribe(value => value !== 3 ? console.log('Tick') : console.log('BANG'));
  }

  ngOnDestroy(): void {
    // this.destroy$.next(true)
  }
}
