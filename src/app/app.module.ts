import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { CollapseModule } from 'ngx-bootstrap/collapse';
// import { AccordionModule } from 'ngx-bootstrap/accordion';

//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeModule } from './components/home/home.module';
import { HeaderModule } from './shared/layout/header/header.module';
import { FooterModule } from './shared/layout/footer/footer.module';
import { ServicosUrgenciaEmergenciaModule } from './components/servicos-urgencia-emergencia/servicos-urgencia-emergencia.module';

@NgModule({
  declarations: [
    AppComponent,
    //HeaderComponent,
    // FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //FontAwesomeModule,
    HomeModule,
    HeaderModule,
    FooterModule,
    ServicosUrgenciaEmergenciaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
