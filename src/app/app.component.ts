import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { stdInter } from 'src/studentInterface';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  stdForm = new FormGroup({
    id: new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    standerd: new FormControl('',Validators.required),
  })

  constructor(public student:StudentService){}

  onSubmit(){
    return this.student.addStudent(this.stdForm.value)
  }

}
