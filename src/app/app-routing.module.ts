import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ConsultaOsComponent } from './pages/consulta-os/consulta-os.component';
import { HistoricoDeAvisosComponent } from './pages/historico-de-avisos/historico-de-avisos.component';
import { HomeComponent } from './pages/home/home.component';
import { ManuaisComponent } from './pages/manuais/manuais.component';
import { NovaOSComponent } from './pages/nova-os/nova-os.component';
import { ServicosOferecidosComponent } from './pages/servicos-oferecidos/servicos-oferecidos.component';
import { VeiculosEntreguesComponent } from './pages/veiculos-entregues/veiculos-entregues.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'consulta-os', component:ConsultaOsComponent},
  {path:'historico-de-avisos', component:HistoricoDeAvisosComponent},
  {path:'manuais', component:ManuaisComponent},
  {path:'nova-os', component:NovaOSComponent},
  {path:'servicos-oferecidos', component:ServicosOferecidosComponent},
  {path:'veiculos-entregues', component:VeiculosEntreguesComponent},
  {path:'auth',component:AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
