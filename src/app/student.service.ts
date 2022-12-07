import { Injectable } from '@angular/core';
import { stdInter } from 'src/studentInterface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentList:any[]=[]

  constructor() { }

  addStudent(student:any){
    this.studentList.push(student)
    return true
  }
  removeStudent(id:string){
    let index = this.studentList.findIndex((item)=> id==item.id)
    this.studentList.splice(index,1)
    return id
  }
  updateStudent(id:string){
    let index = this.studentList.findIndex((item)=> id==item.id)
    this.studentList.splice(index,1)
    return id
  }
  
}
