import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharmacloudPage } from './sharmacloud.page';

const routes: Routes = [
  {
    path: '',
    component: SharmacloudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharmacloudPageRoutingModule {}
