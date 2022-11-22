import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {

  snapForm!: FormGroup
  faceSnapPreview$!: Observable<FaceSnap>;
  urlRegex!: RegExp;
  emailRegex!: RegExp;

  constructor(private formBuilder: FormBuilder, private router: Router, private facesnapService: FaceSnapService) {
  }

  ngOnInit(): void {
    // return un type faceSnap
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.emailRegex = / [\w -\.] +@([\w -] +\.) +[\w -]{ 2, 4 } $/;

    this.snapForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location: [null]
    }, {
      updateOn: 'blur'
    })

    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(  // Créer les champs manquant de l'objet faceSnap
      map(formValue => ({ // ({}) -> indique qu'on retourne un objet
        ...formValue, // recupérer toutes les valeurs de mon formulaore
        createdDate: new Date(),
        id: 0,
        snaps: 0
      }))
    )
  }

  onSubmitFormSnap(): void {
    //console.log(this.snapForm.value);
    this.facesnapService.addFaceSnap(this.snapForm.value)
    this.router.navigateByUrl('/facesnaps')
  }

}
