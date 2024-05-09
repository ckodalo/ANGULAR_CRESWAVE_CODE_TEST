import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

export const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'edit/:id', component: TaskDetailsComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
