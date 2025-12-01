import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paesi } from './paesi';

describe('Paesi', () => {
  let component: Paesi;
  let fixture: ComponentFixture<Paesi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paesi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paesi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
