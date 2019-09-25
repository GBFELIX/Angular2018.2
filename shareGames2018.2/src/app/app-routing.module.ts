import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'add-player', loadChildren: './pages/add-player/add-player.module#AddPlayerPageModule' },
  { path: 'list-player', loadChildren: './pages/list-player/list-player.module#ListPlayerPageModule' },
  { path: 'perfil-player', loadChildren: './pages/perfil-player/perfil-player.module#PerfilPlayerPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
