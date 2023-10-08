import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullDataComponent } from './components/profile/full-data/full-data.component';
import { NameComponent } from './components/profile/name/name.component';
import { SkillsComponent } from './components/profile/skills/skills.component';

const routes: Routes = [
  {
    path: `name`,
    component: NameComponent
  },
  {
    path: `skills`,
    component: SkillsComponent
  },
  {
    path: `fullData`,
    component: FullDataComponent
  },
  { path: '**', redirectTo: '/name', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
