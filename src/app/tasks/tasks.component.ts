import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';


@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: 'tasks.component.html',
  styles: ``
})
export class TasksComponent implements OnInit{

  tasks: Task[] = [];
  displayedColumns: string[] = ['title', 'description', 'status', 'actions']

  constructor(private taskService: TaskService, private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
      this.taskService.getTasks().subscribe(tasks => {

        this.tasks = tasks;
      })
  }

  addTask(): void {

    this.router.navigate(['/add'])
  }

  editTask(task: Task): void {
    this.router.navigate(['/edit', task.id]);
  }

  deleteTask(taskId: string): void {

    const dialogRef = this.dialog.open(DeleteConfirmationComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.taskService.deleteTask(taskId);
      }
    });



  }

}
