import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `<h3> Congratz!! something was successful!!!...</h3>`,
  styles: [`
      h3 {
         color:green;
         padding: 20px;
         background-color:palegreen;
         border: 1px solid green;
        }
      
  `]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
