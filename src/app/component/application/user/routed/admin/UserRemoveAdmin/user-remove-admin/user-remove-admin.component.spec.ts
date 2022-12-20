import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRemoveAdminComponent } from './user-remove-admin.component';

describe('UserRemoveAdminComponent', () => {
  let component: UserRemoveAdminComponent;
  let fixture: ComponentFixture<UserRemoveAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRemoveAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRemoveAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
