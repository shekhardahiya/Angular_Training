import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor() { }

  timer= new Subject();
  flag= new Subject();
  pauseFlag=new Subject();
}
