import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnadoDAWComponent } from './alumnado-daw/alumnado-daw.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { CocheComponent } from './coche/coche.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ActivatedRoute,Router } from '@angular/router';
import { PipePipe } from './pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AlumnadoDAWComponent,
    EmpleadoComponent,
    CocheComponent,
    HomeComponent,
    ContactoComponent,
    PipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
