import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosHospitalaresComponent } from './servicos-hospitalares.component';

describe('ServicosHospitalaresComponent', () => {
  let component: ServicosHospitalaresComponent;
  let fixture: ComponentFixture<ServicosHospitalaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicosHospitalaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicosHospitalaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
