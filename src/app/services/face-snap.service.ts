import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})

export class FaceSnapService {

  constructor(private http: HttpClient) { }

  myfaceSnapParent: FaceSnap[] = []
  //   {
  //     id: 1,
  //     title: "Archi",
  //     description: "Mon meilleur ami depuis tout petit wouaf!",
  //     createdDate: new Date(),
  //     snaps: 430,
  //     imageUrl: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
  //     location: "Paris"
  //   },
  //   {
  //     id: 2,
  //     title: "Ski",
  //     description: "Les dernières vacances à la montage.. :hearts:",
  //     createdDate: new Date(),
  //     snaps: 22,
  //     imageUrl: "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
  //     location: "Morzine"
  //   },
  //   {
  //     id: 3,
  //     title: "Grossesse",
  //     description: "A quoi je ressemble pendant mes grossesses",
  //     createdDate: new Date(),
  //     snaps: 156,
  //     imageUrl: "https://picsum.photos/id/1084/536/354?grayscale"
  //   },
  //   {
  //     id: 4,
  //     title: "Work work work",
  //     description: "Obligé de taffer aujourd'hui, la vie est dur!",
  //     createdDate: new Date(),
  //     snaps: 55,
  //     imageUrl: "https://picsum.photos/id/1/200/300"
  //   },
  //   {
  //     id: 5,
  //     title: "Evasion",
  //     description: "Un moment de répi",
  //     createdDate: new Date(),
  //     snaps: 156,
  //     imageUrl: "https://picsum.photos/id/1000/367/267"
  //   },
  //   {
  //     id: 6,
  //     title: "Gourmandise",
  //     description: "Les premiers framboisiers sont mûres ... :yum:",
  //     createdDate: new Date(),
  //     snaps: 156,
  //     imageUrl: "https://picsum.photos/id/102/367/267"
  //   }
  // ]



  // getAllFaceSnaps(): FaceSnap[] {
  //   //return this.myfaceSnapParent;
  // }

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(facesnapid: number): FaceSnap {
    const facesnap = this.myfaceSnapParent.find(facesnap => facesnap.id === facesnapid)
    if (!facesnap) {
      throw new Error('Facesnap not found! :cry:')
    } else {
      return facesnap;
    }
  }

  snapeFaceById(facesnapid: number, snapType: true | false) {
    const facesnap = this.getFaceSnapById(facesnapid)
    snapType == true ? facesnap.snaps++ : facesnap.snaps--;
  }

  addFaceSnap(formValue: {
    title: string, description: string, imageUrl: string, location?: string
  }) {
    const faceSnap: FaceSnap = {
      ...formValue, // on récupère les prorps de l'objet
      createdDate: new Date(),
      snaps: 0,
      id: this.myfaceSnapParent[this.myfaceSnapParent.length - 1].id + 1
    }
    this.myfaceSnapParent.push(faceSnap)
  }

}