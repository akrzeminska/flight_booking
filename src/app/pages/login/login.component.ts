import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;
  username : string = '';
  password: string = '';
  
  constructor(private fb: FormBuilder, private authServce: AuthService,
     private router: Router, private activatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  hideShowPass(){
    // console.log('it works!')
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSubmit() {
    if(this.loginForm.valid) {
      // send the object to database
      // console.log(this.loginForm.value);
      const username : string = this.loginForm.controls['username'].value;
      const password : string = this.loginForm.controls['password'].value;
      this.authServce.checkCredentials(username, password).subscribe((isLoggedIn) => {
        if (isLoggedIn) {
          this.activatedRoute.queryParams.subscribe((queryParams: any) => {
            this.router.navigate([queryParams.redirect])
          });
        } else {
          alert('Your user information is incorrect. Try again or go for user registration.');
        }
      });
    } else {
      this.validateAllFormFields(this.loginForm);
      alert("Your form is invalid");
    }
  }

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);

      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true});
      } else if(control instanceof FormGroup) {
          this.validateAllFormFields(control)
      }
    })
  } 
}
