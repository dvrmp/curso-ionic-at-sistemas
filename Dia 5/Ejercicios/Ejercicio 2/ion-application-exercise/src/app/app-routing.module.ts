import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sandbox',
    pathMatch: 'full'
  },
  {
    path: 'sandbox',
    loadChildren: () => import('./pages/sandbox/sandbox.module').then( m => m.SandboxPageModule)
  },
  {
    path: 'fruit-list',
    loadChildren: () => import('./pages/fruit-list/fruit-list.module').then( m => m.FruitListPageModule)
  },
  {
    path: 'fruit-details/:id',
    loadChildren: () => import('./pages/fruit-details/fruit-details.module').then( m => m.FruitDetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
