import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: 'tasks.component.html',
  styles: ``
})
export class TasksComponent implements OnInit{

  tasks: Task[] = [];
  displayedColumns: string[] = ['title', 'description', 'status', 'actions']

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
      this.taskService.getTasks().subscribe(tasks => {

        this.tasks = tasks;
      })
  }

  editTask(task: Task): void {
    this.router.navigate(['/edit', task.id]);
  }

  deleteTask(id: string): void {
  }

}