import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from 'src/app/pages/page.component';

const routes: Routes = [
    {
        path: '',
        component: PageComponent,
        loadChildren: () =>
          import('src/app/pages/page.module').then(
            (o) => o.PageModule
          ),
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}