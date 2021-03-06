import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { UpdateComponent } from './components/update/update.component';

const appRoutes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'actualiza', component: UpdateComponent },
  { path: '',      component:  ConsultaComponent },
  {path:'**', pathMatch:'full', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ConsultaComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
