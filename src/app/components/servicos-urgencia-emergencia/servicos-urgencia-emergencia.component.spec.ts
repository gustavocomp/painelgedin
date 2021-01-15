import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosUrgenciaEmergenciaComponent } from './servicos-urgencia-emergencia.component';

describe('ServicosUrgenciaEmergenciaComponent', () => {
  let component: ServicosUrgenciaEmergenciaComponent;
  let fixture: ComponentFixture<ServicosUrgenciaEmergenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicosUrgenciaEmergenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicosUrgenciaEmergenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
