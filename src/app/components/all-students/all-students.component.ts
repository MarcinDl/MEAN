import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.scss']
})
export class AllStudentsComponent implements OnInit {

  StudentData: any = [];

  constructor(private studentApi:ApiService) {
    // this.studentApi.GetStudents().subscribe(data => {
    //   this.StudentData = data;
    //   console.log(data)
    // })



   }
   public wypisz;
   students$;
  komunikat;

  user;
  ngOnInit() {
    this.studentApi.GetStudents().subscribe( {next: value => this.wypisz = value, complete: () => this.komunikat = "gotowe"});

    this.studentApi.castUser.subscribe(user => {
      console.log("user",user)
    this.komunikat = user;
    })
  }

  //get all students - 1. sposób
  ngDoCheck(){
    // this.studentApi.GetStudents().subscribe(data => {
    //   this.StudentData = data;
    //   console.log(data)
    // })

  }


  // getAllStudents(){
  //   this.studentApi._refreshGetAllStudents().subscribe( data => {
  //     this.wypisz = data;
  //   })
  // }
}
