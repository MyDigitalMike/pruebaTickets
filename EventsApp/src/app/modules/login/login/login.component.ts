import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/services';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      userEmail: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {

  }
  onSubmit() {
    const userEmail = this.loginForm.value.userEmail;
    this.authService.apiAuthLoginPost({ body: { email: userEmail } }).subscribe({
      next: (response: any) => {
        console.log(response);
        const idUser = JSON.parse(response).userId;
        localStorage.setItem('userId', idUser);
        this.router.navigate(['/events/list']);
      },
      error: (err) => {
        this.errorMessage = 'Correo no registrado o incorrecto';
        const errorData = JSON.parse(err.error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorData.message
        });
      },
    });
  }
}
