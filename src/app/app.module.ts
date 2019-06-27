import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MembreListComponent }  from './membre-list/membre-list.component';
import { MembreFormComponent } from './membre-form/membre-form.component';
import { RouterModule, Routes } from '@angular/router';
import { Membre } from './model/membre';
import { LoginComponent} from './login/login.component';
import { RandoListComponent } from './rando-list/rando-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { MembreInscriptionComponent } from './membre-inscription/membre-inscription.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/connect', pathMatch: 'full' },
  {
    path: 'connect',
    component: MembreFormComponent
  },
  {
    path: 'randonnees',
    component: RandoListComponent,

  },
  {
    path: 'membres',
    component: UserFormComponent,
  },
  {
    path: 'admin',
    component: MembreListComponent
  },
  {
    path: 'inscrire',
    component: MembreInscriptionComponent
  }
 /* {
    path: 'membres',
    component: Membre,
    data: { title: 'Liste des membres' }
  },
  {
    path: 'membre/:id',
    component: Membre,
    data: { title: 'Détals d\'un membre' }
  },
  {
    path: '#',
    component: Membre,
    data: { title: 'Ajout d\'un membre' }
  },
  {
    path: '#',
    component: Membre,
    data: { title: 'Modification d\'un membre' }
  }
  { path: '',
    redirectTo: 'connect',
    pathMatch: 'full'
  }*/
];

@NgModule({
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    FormsModule,       
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    MembreListComponent,
    MembreFormComponent,
    LoginComponent,
    RandoListComponent,
    UserFormComponent,
    MembreInscriptionComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}