import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineContactsComponent } from './online-contacts.component';

describe('OnlineContactsComponent', () => {
  let component: OnlineContactsComponent;
  let fixture: ComponentFixture<OnlineContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
