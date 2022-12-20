import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNewAdminComponent } from './user-new-admin.component';

describe('UserNewAdminComponent', () => {
  let component: UserNewAdminComponent;
  let fixture: ComponentFixture<UserNewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNewAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserNewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
