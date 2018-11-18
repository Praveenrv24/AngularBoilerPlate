import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameRootComponent } from './frame-root.component';

describe('FrameRootComponent', () => {
  let component: FrameRootComponent;
  let fixture: ComponentFixture<FrameRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
