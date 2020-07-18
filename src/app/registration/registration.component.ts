import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { passwordValidator } from '../shared/password.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      username: ['', Validators.required],
      tempPass: ['', Validators.required],
      confirmPass: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['', Validators.required]
    },{validator : passwordValidator});

  }

  onSubmit() {
    alert("User Registered");
    this.apiService.registerUser(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['login']);
      });
  }

  login() {
    this.router.navigate(['login']);
  }


}
