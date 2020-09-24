import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormGroup,FormControl,Validators } from '@angular/forms'; 
import { ToastController } from '@ionic/angular';
import { AuthCredentials } from 'src/app/shared/models';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {

  public loading : boolean = false;
  public FormLogin : FormGroup = new FormGroup({
    'email':new FormControl('',[Validators.email,Validators.required]),
    'password':new FormControl('',[Validators.required,Validators.minLength(5)])
  })
  constructor(private authService: AuthService, private router: Router,private toastController:ToastController) {}

  public performAuth(): void {

    if(this.FormLogin.valid){
      this.loading = true;
      this.FormLogin.disable()
      let credentials: AuthCredentials = {
        email: this.FormLogin.controls['email'].value,
        password: this.FormLogin.controls['password'].value
      }
      this.authService.login(credentials).subscribe(
        () => {
          this.router.navigate(['/surveys-list']);
        },
        (error) => {
          this.loading = false;
          this.FormLogin.enable();
          this.showErorrMessage(error.error.message);
        }
      );
    }

  
  }

  private async showErorrMessage(errorMessage:string){
    const toast = await this.toastController.create({
      message: errorMessage,
      duration: 2000
    });
    toast.present();
  }
}
