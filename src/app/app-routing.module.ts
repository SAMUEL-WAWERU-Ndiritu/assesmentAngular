import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParcelFormComponent } from './parcel-form/parcel-form.component';
import { ParcelListComponent } from './parcel-list/parcel-list.component';
import { AuthGuard } from '../auth.guard';
import { CanDeactivateGuard } from '../can-deactivate.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/form' },
  { path: 'form', component: ParcelFormComponent, canActivate: [AuthGuard], canDeactivate: [CanDeactivateGuard] },
  { path: 'list', component: ParcelListComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
