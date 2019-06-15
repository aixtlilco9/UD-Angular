import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-assignment-three',
  templateUrl: './practice-assignment-three.component.html',
  styles: [`
    .online{
      color: red;
    }
    `]
  //styleUrls: ['./practice-assignment-three.component.css']
})
export class PracticeAssignmentThreeComponent {
  clicksArray = [,];//this here is creating a 2d array no specific size given
  numClicks = 0;
  displayPara = true;

  //constructor() { }

  //ngOnInit() {
  //}

  onClickDisplayBtn() {
    this.numClicks++;
    this.displayPara = this.displayPara === true ? false : true;
    this.clicksArray.push(this.numClicks, new Date().toLocaleString());
    return;
  }

  getClickCount() {
    return this.numClicks >= 5 ? 'cyan' : 'transparent';
  }

}
