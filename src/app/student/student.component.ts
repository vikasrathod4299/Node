import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: [
  ]
})
export class StudentComponent implements OnInit {
  @Input() std:any;

  constructor(public student:StudentService) { }

  ngOnInit(): void {
  }

}
