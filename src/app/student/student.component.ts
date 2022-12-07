import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: [
  ]
})
export class StudentComponent implements OnInit {
  @Input() std:any;
  @Output() values=new EventEmitter<any>();
  constructor(public student:StudentService) { }

  ngOnInit(): void {
  }

  updateValue(){
    this.values.emit(this.std)
  }

}
