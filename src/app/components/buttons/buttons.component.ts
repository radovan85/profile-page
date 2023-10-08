import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

  constructor(private mainService:MainService){}

  redirectName(){
    this.mainService.redirectName();
  }

  redirectSkills(){
    this.mainService.redirectSkills();
  }

  redirectFullData(){
    this.mainService.redirectFullData();
  }

}
