import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  id:string=''
  constructor(public student:StudentService){}

  onSubmit(){
    return this.student.addStudent(this.stdForm.value)
  }
  updateStd(data:any){
      this.id=data.id
      this.stdForm.patchValue(data)
  }
  onUpdate(){
    this.student.updateStudent(this.id,this.stdForm.value)
    this.id=''
  }

}
