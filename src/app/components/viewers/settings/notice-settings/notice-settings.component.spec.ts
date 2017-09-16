import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeSettingsComponent } from './notice-settings.component';

describe('NoticeSettingsComponent', () => {
  let component: NoticeSettingsComponent;
  let fixture: ComponentFixture<NoticeSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
