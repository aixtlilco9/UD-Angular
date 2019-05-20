import { Component } from "@angular/core"

@Component({
  selector: 'app-assignment2',
  templateUrl: './practice-assignment-two.component.html',
})

export class PracticeAssignmentTwoComponent {
  allowUserNameUpdate = false;
  userName: '';

  onUpdatebBtn(event: Event) {
    this.allowUserNameUpdate = true;
  }
  onResetUserName() {
    this.userName = '';
  }

}
