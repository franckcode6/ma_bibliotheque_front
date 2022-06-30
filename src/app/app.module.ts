import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LivreListComponent } from './views/livre/livre-list/livre-list.component';
import { LivreComponent } from './views/livre/livre/livre.component';
import { AdminLivreListComponent } from './views/admin/livre/admin-livre-list/admin-livre-list.component';
import { AdminLivreComponent } from './views/admin/livre/admin-livre/admin-livre.component';
import { AdminUtilisateurComponent } from './views/admin/utilisateur/admin-utilisateur/admin-utilisateur.component';
import { AdminUtilisateurListComponent } from './views/admin/utilisateur/admin-utilisateur-list/admin-utilisateur-list.component';
import { LivreDetailComponent } from './views/livre/livre-detail/livre-detail.component';
import { AuteurDetailComponent } from './views/auteur/auteur-detail/auteur-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LivreListComponent,
    LivreComponent,
    AdminLivreListComponent,
    AdminLivreComponent,
    AdminUtilisateurListComponent,
    AdminUtilisateurComponent,
    LivreDetailComponent,
    AuteurDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
