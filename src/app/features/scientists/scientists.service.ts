import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { Scientist } from './scientists.model';

@Injectable({ providedIn: 'root' })
export class ScientistsService {
  scientists$ = of(scientistMock).pipe(delay(1500));
  constructor() {}
}
const scientistMock: Scientist[] = [
  {
    id: 1,
    name: 'Albert Einstein',
    photoUrl:
      'https://cdn.pixabay.com/photo/2016/12/27/06/38/albert-einstein-1933340_1280.jpg',
    description:
      'Albert Einstein was a German-born theoretical physicist, widely ranked among the greatest and most influential scientists of all time.',
  },
  {
    id: 2,
    name: 'Marie Curie',
    photoUrl:
      'https://as2.ftcdn.net/v2/jpg/01/89/64/93/1000_F_189649358_ptV7OYC69lMMVXVrLDWo3xGJ4BLG3Z8j.jpg',
    description:
      'Marie Salomea Skłodowska–Curie was a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity.',
  },
  {
    id: 3,
    name: 'Yuri Kondratyuk',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/%D0%9A%D0%BE%D0%BD%D0%B4%D1%80%D0%B0%D1%82%D1%8E%D0%BA%2C_%D0%AE%D1%80%D0%B8%D0%B9.jpg',
    description:
      'Yuri Vasilyevich Kondratyuk, real name Aleksandr Ignatyevich Shargei was a Ukrainian engineer and mathematician in the Soviet Union.',
  },
  {
    id: 4,
    name: 'Alan Turing',
    photoUrl: 'https://images.immediate.co.uk/production/volatile/sites/7/2021/05/GettyImages-1485119807-1-c279658-e1687274638529.jpg?quality=90&webp=true&resize=619,413',
    description:
      'Yuri Vasilyevich Kondratyuk, real name Aleksandr Ignatyevich Shargei was a Ukrainian engineer and mathematician in the Soviet Union.',
  },
  {
    id: 5,
    name: 'Neil deGrasse Tyson',
    photoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/c/cf/Tyson_%26_Kepler_team.jpg',
    description:
      'Neil deGrasse Tyson is an American astrophysicist, author, and science communicator. Tyson studied at Harvard University, the University of Texas at Austin',
  },
];
