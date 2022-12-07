import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styles: [
  ]
})
export class StudentListComponent implements OnInit {
  @Output() stdValue = new EventEmitter<any>() 
  constructor(public student:StudentService) { }

  ngOnInit(): void {
  }
  updateValue(data:any){
    this.stdValue.emit(data)
  }

}
