import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLivreListComponent } from './views/admin/livre/admin-livre-list/admin-livre-list.component';
import { AdminLivreComponent } from './views/admin/livre/admin-livre/admin-livre.component';
import { LivreListComponent } from './views/livre/livre-list/livre-list.component';

const routes: Routes = [
  { path: '', component: LivreListComponent },
  { path: 'admin/livres', component: AdminLivreListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
