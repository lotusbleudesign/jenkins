import { Component, OnInit } from '@angular/core';
import { concatMap, delay, exhaustMap, filter, interval, map, mergeMap, Observable, of, switchMap, take, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'snapface';
  interval$!: Observable<string>;

  redTrainsCalled = 0;
  yellowTrainsCalled = 0;

  ngOnInit(): void {

    // mergeMAp = assure en // , peu importe l'ordre et peu importe si observable complété ou non
    // concatMap = assure la mise en série, conserve l'odre
    // exhaustMap = assure d'être entièrement traité , ignore tous les émissions tant que l'émission courant n'est pas fini. Puis s'arrete
    // switchMap = Si changement, annule la souscription courrant et souscrit au nouvel suivant, servira quand c'est derniere émission qui nous interresse.

    // logger(text: string): void {
    //   console.log(`Log: ${text}`)
    // }
  }


}