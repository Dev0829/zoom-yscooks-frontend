import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZoomComponent } from './components/zoom/zoom.component';
import { AuthGuard } from '../shared/services/auth-guard.service';

const routes: Routes = [
  {
    path: ':id',
    component: ZoomComponent,
    canActivate: [AuthGuard],
    data: {
      login: true,
      dashboard: true,
      logout: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZoomRoutingModule {}
