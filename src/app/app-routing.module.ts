import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "history",
    loadChildren: () => import("./modules/history/history.module").then((m) => m.HistoryModule),
  },
  {
    path: "search",
    loadChildren: () => import("./modules/search/search.module").then((m) => m.SearchModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
