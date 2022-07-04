import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { AdminLivreListComponent } from './views/admin/livre/admin-livre-list/admin-livre-list.component';
import { AdminLivreComponent } from './views/admin/livre/admin-livre/admin-livre.component';
import { AdminUtilisateurListComponent } from './views/admin/utilisateur/admin-utilisateur-list/admin-utilisateur-list.component';
import { AuteurDetailComponent } from './views/auteur/auteur-detail/auteur-detail.component';
import { LivreAddComponent } from './views/livre/livre-add/livre-add.component';
import { LivreDetailComponent } from './views/livre/livre-detail/livre-detail.component';
import { LivreListComponent } from './views/livre/livre-list/livre-list.component';
import { ConnexionComponent } from './views/utilisateur/connexion/connexion.component';
import { InscriptionComponent } from './views/utilisateur/inscription/inscription.component';
import { UtilisateurDetailComponent } from './views/utilisateur/utilisateur-detail/utilisateur-detail.component';

const routes: Routes = [
  { path: '', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  {
    path: 'profile',
    canActivate: [AuthGuardService],
    component: UtilisateurDetailComponent,
  },
  {
    path: 'livres',
    canActivate: [AuthGuardService],
    component: LivreListComponent,
  },
  {
    path: 'livres/add',
    canActivate: [AuthGuardService],
    component: LivreAddComponent,
  },
  {
    path: 'livres/:id',
    canActivate: [AuthGuardService],
    component: LivreDetailComponent,
  },
  {
    path: 'auteurs/:id',
    canActivate: [AuthGuardService],
    component: AuteurDetailComponent,
  },
  {
    path: 'admin/livres',
    component: AdminLivreListComponent,
  },
  {
    path: 'admin/utilisateurs',
    component: AdminUtilisateurListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
