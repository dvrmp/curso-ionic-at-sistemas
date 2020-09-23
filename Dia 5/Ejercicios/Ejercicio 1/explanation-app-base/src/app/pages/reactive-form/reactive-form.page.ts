import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { State } from 'src/app/shared/enums/state.enum';
import { isNotTemporalEmailValidator } from 'src/app/shared/utils/validator';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.page.html',
  styleUrls: ['./reactive-form.page.scss'],
})
export class ReactiveFormPage implements OnInit {

  public user: User;
  public state: State = State.loaded;
  public formUser: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    birthDate: ['', [Validators.required]],
    sex: '',
    phone: '',
    email: ['', [Validators.required, Validators.email, isNotTemporalEmailValidator]]
  });
  /**
   * 
   * @param userService 
   * @param formBuilder 
   * @param toastController
   */
  constructor(private userService:UserService,private formBuilder:FormBuilder,private toastController:ToastController) {
  }

  public ngOnInit(): void{}

  public getEventFormFailed(state:State): void{
    if(state === State.error){
      this.state = State.loaded;
      this.formUser.reset();
    }
  }

  public updateRemoteUser(){
    if(this.formUser.valid){
      this.state = State.loading;
      this.user = this.formUser.value;
      this.formUser.reset();
      this.userService.updateUserRemote(this.user).subscribe((_user)=>{
        this.user = _user;
        this.formUser.patchValue(this.user);
        this.showToast();
        this.state = State.loaded;
      },(error)=>{
        this.state = State.error;
      })
    }
  }

  public async showToast(): Promise<void>{
    const toast = await this.toastController.create({
      message: 'User updated successfully.',
      duration: 2000
    });
    toast.present();
  }
}
