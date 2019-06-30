import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  onValueChanged: BehaviorSubject<number> = new BehaviorSubject(undefined);

  constructor() { }
}
