import { Injectable } from '@angular/core';
import { User } from './search.interface';
import { Observable, Subject, map, of, tap } from 'rxjs';

@Injectable()
export class SearchService {
  users: User[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      dept: 'Finance',
      salary: 5000,
      doj: new Date('2015-12-11'),
    },
    {
      firstName: 'Amy',
      lastName: 'Watson',
      dept: 'HR',
      salary: 8000,
      doj: new Date('2013-07-23'),
    },
    {
      firstName: 'Shrishti',
      lastName: 'Sharma',
      dept: 'IT',
      salary: 10000,
      doj: new Date('2019-10-20'),
    },
  ];

  usersList$ = new Observable<User[]>();
  constructor() {
    this.usersList$ = of(this.users).pipe(
      map((users) =>
        users.sort((a, b) => a.firstName.localeCompare(b.firstName))
      )
    );
  }
}
