import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { Router } from '@angular/router';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  });

  it('should create form on init', () => {
   
      
    component.ngOnInit();
    expect(component.form).not.toBeUndefined();
})

  it('should go to home on login', () => {
    spyOn(router, 'navigate');
    component.login();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });
});
