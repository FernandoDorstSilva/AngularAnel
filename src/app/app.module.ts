import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NovaOSComponent } from './pages/nova-os/nova-os.component';
import { ConsultaOsComponent } from './pages/consulta-os/consulta-os.component';
import { VeiculosEntreguesComponent } from './pages/veiculos-entregues/veiculos-entregues.component';
import { ServicosOferecidosComponent } from './pages/servicos-oferecidos/servicos-oferecidos.component';
import { ManuaisComponent } from './pages/manuais/manuais.component';
import { HistoricoDeAvisosComponent } from './pages/historico-de-avisos/historico-de-avisos.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NovaOSComponent,
    ConsultaOsComponent,
    VeiculosEntreguesComponent,
    ServicosOferecidosComponent,
    ManuaisComponent,
    HistoricoDeAvisosComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
