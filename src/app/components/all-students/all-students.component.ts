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
   }
   public wypisz;
   students$;
  komunikat;

  user;

  summaryArray: any = [];
  summaryArray2: any = [];

  proba = 12;
  ngOnInit() {
    //wypisanie studentów z bazy
    this.studentApi.GetStudents().subscribe( {next: value => this.wypisz = value, complete: () => console.log("gotowe")});

    //wypisanie nowych osób dodanych w formularzu
    this.studentApi.castUser.subscribe(user => {
      console.log("user",user)
      this.komunikat = user;
    })

    //wypisanie studentów z bazy wraz z dodaniem nowych z formularza
    this.studentApi.GetStudents().subscribe( {next: value => this.wypisz = value, complete: () => console.log("gotowe")});
    this.studentApi.castUser2.subscribe({
      next: value => {
        this.summaryArray2.push(value)
        console.log("value from castUser", value)
      },
      complete: () => console.log("gotowe")})

  }

  //get all students - 1. sposób
  ngDoCheck(){
    // this.studentApi.GetStudents().subscribe(data => {
    //   this.StudentData = data;
    //   console.log(data)
    // })

  }

}
