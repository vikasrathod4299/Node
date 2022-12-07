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
  updateStudent(id:string,data:any){
    console.log('helo');
    let std = this.studentList.find((item)=> id==item.id)
    std.id=data.id
    std.name=data.name
    std.standerd=data.standerd
  }
  
}
