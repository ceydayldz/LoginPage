import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService:AuthService
  ) {}
  ngOnInit(): void {
    const userName =this.loginForm.value.name;
    const password =this.loginForm.value.password;

    this.authService.login(userName,password).subscribe((isLoggedIn: boolean)=>{
      if (isLoggedIn) {
        this.loginForm.reset();
        this.router.navigate(['main']);
      }
      else{
        alert('Kullanıcı adı veyda şifre hatalı!');
      }
    })




}
 }