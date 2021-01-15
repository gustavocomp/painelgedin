import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicosUrgenciaEmergenciaComponent } from './servicos-urgencia-emergencia.component';



@NgModule({
  declarations: [ServicosUrgenciaEmergenciaComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ServicosUrgenciaEmergenciaComponent
  ]
})
export class ServicosUrgenciaEmergenciaModule { }
