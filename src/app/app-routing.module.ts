import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'about-you',
    loadChildren: () => import('./about-you/about-you.module').then( m => m.AboutYouPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'in-game',
    loadChildren: () => import('./in-game/in-game.module').then( m => m.InGamePageModule)
  },
  {
    path: 'win',
    loadChildren: () => import('./win/win.module').then( m => m.WinPageModule)
  },
  {
    path: 'lose',
    loadChildren: () => import('./lose/lose.module').then( m => m.LosePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
