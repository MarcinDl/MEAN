import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.scss']
})
export class AllStudentsComponent implements OnInit {

  constructor(private studentApi:ApiService) {
  }
  wypisz;
  komunikat;
  summaryArray: any = [];
  StudentData: any = [];


  ngOnInit() {
    //wypisanie studentów z bazy
    this.studentApi.GetStudents().subscribe( {next: value => this.wypisz = value, complete: () => console.log("gotowe")});

    //wypisanie nowych osób dodanych w formularzu
    this.studentApi.castUser.subscribe(user => {
      console.log("user nowododany",user)
      this.komunikat = user;
    })

    //wypisanie studentów z bazy wraz z dodaniem nowych z formularza
    this.studentApi.GetStudents().subscribe( {next: value => this.wypisz = value, complete: () => console.log("gotowe")});
    this.studentApi.castUser.subscribe({
      next: value => {
        this.summaryArray.push(value)
        console.log("value from castUser", value)
      },
      complete: () => console.log("gotowe")})

  }

  // get all students - nie najlepszy sposób
  // ngDoCheck(){
  //   this.studentApi.GetStudents().subscribe(data => {
  //     this.StudentData = data;
  //     console.log(data)
  //   })
  // }

}
