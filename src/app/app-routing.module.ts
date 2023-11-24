import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EmiterComponent } from './components/emiter/emiter.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { GameIdComponent } from './components/game-id/game-id.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'list', component: ListRenderComponent },
  { path: 'list/:id', component: ItemDetailComponent },
  { path: 'gamelist', component: GameListComponent },
  { path: 'gamelist/:id', component: GameIdComponent },
  { path: 'hidebutton', component: EventosComponent },
  { path: 'rowthedice', component: EmiterComponent },
  { path: 'completedata', component: TwoWayBindingComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
