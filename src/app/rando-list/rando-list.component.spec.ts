import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandoListComponent } from './rando-list.component';

describe('RandoListComponent', () => {
  let component: RandoListComponent;
  let fixture: ComponentFixture<RandoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
