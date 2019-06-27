import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembreInscriptionComponent } from './membre-inscription.component';

describe('MembreInscriptionComponent', () => {
  let component: MembreInscriptionComponent;
  let fixture: ComponentFixture<MembreInscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembreInscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembreInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
