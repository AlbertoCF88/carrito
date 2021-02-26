import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormualriosegundoComponent } from './formualriosegundo.component';

describe('FormualriosegundoComponent', () => {
  let component: FormualriosegundoComponent;
  let fixture: ComponentFixture<FormualriosegundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormualriosegundoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormualriosegundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
