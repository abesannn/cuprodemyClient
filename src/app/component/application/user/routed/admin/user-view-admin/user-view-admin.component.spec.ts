import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewAdminComponent } from './user-view-admin.component';

describe('UserViewAdminComponent', () => {
  let component: UserViewAdminComponent;
  let fixture: ComponentFixture<UserViewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
