import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatUserComponent } from './creat-user.component';

describe('CreatUserComponent', () => {
  let component: CreatUserComponent;
  let fixture: ComponentFixture<CreatUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
