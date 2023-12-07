import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myForm: FormGroup;
  constructor(){
    this.myForm = new FormGroup({
      login: new FormControl(),
    })
  }
  title = 'angularLogin';
}
