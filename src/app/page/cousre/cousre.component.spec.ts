import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CousreComponent } from './cousre.component';

describe('CousreComponent', () => {
  let component: CousreComponent;
  let fixture: ComponentFixture<CousreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CousreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CousreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
