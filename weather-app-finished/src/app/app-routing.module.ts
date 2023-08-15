import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnaSayfaComponent } from './ana-sayfa/ana-sayfa.component';
import { SehirlerComponent } from './sehirler/sehirler.component';

const routes: Routes = [
  { path: 'ana-sayfa', component: AnaSayfaComponent },
  { path: 'sehirler', component: SehirlerComponent },
  { path: '**', redirectTo: 'ana-sayfa', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
