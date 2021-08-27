import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleThemeComponent } from './example-theme.component';

describe('ExampleThemeComponent', () => {
  let component: ExampleThemeComponent;
  let fixture: ComponentFixture<ExampleThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
