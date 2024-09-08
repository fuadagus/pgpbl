import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }
  canLoad(): Observable<boolean> { 

    return of(false);
  }

}
