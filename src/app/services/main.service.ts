import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private router:Router) { }

  redirectName(){
    this.router.navigate([`name`]);
  }

  redirectFullData(){
    this.router.navigate([`fullData`]);
  }

  redirectSkills(){
    this.router.navigate([`skills`]);
  }
}
