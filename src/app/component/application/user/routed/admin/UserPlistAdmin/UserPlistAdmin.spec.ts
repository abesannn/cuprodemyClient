import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPlistAdminComponent } from './UserPlistAdmin.component';


describe('UserPlistAdminComponent', () => {
  let component: UserPlistAdminComponent;
  let fixture: ComponentFixture<UserPlistAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPlistAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPlistAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
