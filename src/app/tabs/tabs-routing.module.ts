import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'sharmacloud',
        loadChildren: () => import('../pages/sharmacloud/sharmacloud.module').then(m => m.SharmacloudPageModule)
      },
      {
        path: 'work',
        loadChildren: () => import('../pages/work/work.module').then(m => m.WorkPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../pages/contact/contact.module').then(m => m.ContactPageModule)
      },
      {
        path: 'skills',
        loadChildren: () => import('../pages/skills/skills.module').then(m => m.SkillsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/sharmacloud',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/sharmacloud',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
