import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnadoDAWComponent } from './alumnado-daw/alumnado-daw.component';
import { EmpleadoComponent } from './empleado/empleado.component';

const routes: Routes = [
{path: 'empleado', component: EmpleadoComponent},
{path: 'alumnado', component: AlumnadoDAWComponent},
{path: '', component: EmpleadoComponent},
{path: '**', component: EmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
