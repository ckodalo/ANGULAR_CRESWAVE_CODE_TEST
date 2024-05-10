import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  standalone: false,
  templateUrl: './add-task.component.html',
  styles: ``
})
export class AddTaskComponent {

  task!: Task;
  taskForm!: FormGroup;

  constructor(private taskService : TaskService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: [false]
    });
  }


  onSubmit(): void {

    if (this.taskForm && this.taskForm.valid) {
      const updatedTask: Task = { ...this.taskForm.value };

      this.taskService.addTask(updatedTask);
      this.router.navigate(['/tasks']);
    }
  }

  goBack(): void {

    this.router.navigate(['/tasks']);
  }

}
