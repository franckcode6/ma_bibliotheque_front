import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivreListComponent } from './views/livre/livre-list/livre-list.component';

const routes: Routes = [{ path: '', component: LivreListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
