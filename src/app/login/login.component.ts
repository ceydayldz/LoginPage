import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [AuthService], // AuthService'ı burada sağlayabilirsiniz

})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService:AuthService
  ) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder
    .group({
      name: ['',Validators.required],
      password: ['',Validators.required]
    })
  }
  login():void{
    const userName = this.loginForm.value.name;
    const password =this.loginForm.value.password;

    this.authService.login(userName, password).subscribe((isLoggedIn:boolean)=>{
      if (isLoggedIn){
        this.loginForm.reset();
        this.router.navigate(['home']);
      }
      else{
        alert('Kullanıcı adı veyda şifre hatalı!')
      }
    })
  }
 }