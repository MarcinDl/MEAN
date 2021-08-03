import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { ApiService } from './shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  studentForm: FormGroup;

  ngOnInit() {
    this.submitBookForm();
  }

  constructor(
    public formbuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private studentApi: ApiService
  ) { }

  /* Reactive book form */
  submitBookForm() {
    this.studentForm = this.formbuilder.group({
      student_name: ['', [Validators.required]],
    })
  }

      /* Submit book */
  submitStudentForm() {
      this.studentApi.AddStudent(this.studentForm.value).subscribe(res => {
        this.ngZone.run(() => {
          console.log('res',res)
          this.studentApi.getHim(res);
        })
      });

  }



}
