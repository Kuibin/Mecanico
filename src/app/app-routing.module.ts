import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ListarMarcasComponent } from './components/listar-marcas/listar-marcas.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  {path: '', redirectTo: 'form', pathMatch: 'full'},
  {path: 'inicio', component:PrincipalComponent},
  {path: 'marcas', component: ListarMarcasComponent},
  {path: 'form', component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
