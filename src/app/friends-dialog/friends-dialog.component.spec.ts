import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsDialogComponent } from './friends-dialog.component';

describe('FriendsDialogComponent', () => {
  let component: FriendsDialogComponent;
  let fixture: ComponentFixture<FriendsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FriendsDialogComponent]
    });
    fixture = TestBed.createComponent(FriendsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
