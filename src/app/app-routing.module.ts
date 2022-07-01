import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLivreListComponent } from './views/admin/livre/admin-livre-list/admin-livre-list.component';
import { AdminLivreComponent } from './views/admin/livre/admin-livre/admin-livre.component';
import { AdminUtilisateurListComponent } from './views/admin/utilisateur/admin-utilisateur-list/admin-utilisateur-list.component';
import { AuteurDetailComponent } from './views/auteur/auteur-detail/auteur-detail.component';
import { LivreAddComponent } from './views/livre/livre-add/livre-add.component';
import { LivreDetailComponent } from './views/livre/livre-detail/livre-detail.component';
import { LivreListComponent } from './views/livre/livre-list/livre-list.component';
import { ConnexionComponent } from './views/utilisateur/connexion/connexion.component';
import { InscriptionComponent } from './views/utilisateur/inscription/inscription.component';

const routes: Routes = [
  { path: '', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'livres', component: LivreListComponent },
  { path: 'livres/add', component: LivreAddComponent },
  { path: 'livres/:id', component: LivreDetailComponent },
  { path: 'auteurs/:id', component: AuteurDetailComponent },
  { path: 'admin/livres', component: AdminLivreListComponent },
  { path: 'admin/utilisateurs', component: AdminUtilisateurListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
