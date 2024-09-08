import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterPageForm } from './form/register.page.form';
import { Subscription } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/AppState';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  
  registerForm!: RegisterPageForm;

  registerStateSubscription!: Subscription;

  constructor(private router:Router,private formBuilder: FormBuilder, private store: Store<AppState>,
    private toastController: ToastController) { }

  ngOnInit() {
    this.createForm();
  }

  register() {
    this.router.navigate(['home']);

  }

  private createForm() {
    this.registerForm = new RegisterPageForm(this.formBuilder);
  }

}
