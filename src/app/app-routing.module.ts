import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicosUrgenciaEmergenciaComponent } from './components/servicos-urgencia-emergencia/servicos-urgencia-emergencia.component';
import { ServicosHospitalaresComponent } from './components/servicos-hospitalares/servicos-hospitalares.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'servicos-urgencia-emergencia',
    component: ServicosUrgenciaEmergenciaComponent
  },
  {
    path: 'servicos-hospitalares',
    component: ServicosHospitalaresComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
