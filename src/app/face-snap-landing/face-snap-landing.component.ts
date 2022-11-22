import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap-landing',
  templateUrl: './face-snap-landing.component.html',
  styleUrls: ['./face-snap-landing.component.scss']
})
export class FaceSnapLandingComponent {

  emailUser!: string;
  adresseInput!: string;

  constructor(private router: Router) { }

  goToFacesnap(): void {
    this.router.navigateByUrl("facesnaps")
  }

  onSubmitForm(form: NgForm) {
    console.log(this.emailUser);
    console.log(form.value);
  }

}
